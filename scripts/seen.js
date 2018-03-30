/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   A hubot script that tracks when/where users were last seen.
//
// Commands:
//   hubot seen <user> - show when and where user was last seen
//   hubot seen in last 24h - list users seen in last 24 hours
//
// Configuration:
//   HUBOT_SEEN_TIMEAGO - If set to `false` (defaults to `true`), last seen times will be absolute dates instead of relative
//
// Author:
//   wiredfool, patcon@gittip

const config =
  {use_timeago: process.env.HUBOT_SEEN_TIMEAGO !== 'false'};

const clean = thing => (thing || '').toLowerCase().trim();

const is_pm = function(msg) {
  try {
    return msg.message.user.pm;
  } catch (error) {
    return false;
  }
};

const ircname = function(msg) {
  try {
    return msg.message.user.name;
  } catch (error) {
    return false;
  }
};

const ircchan = function(msg) {
  try {
    return msg.message.user.room;
  } catch (error) {
    return false;
  }
};

class Seen {
  constructor(robot) {
    this.save = this.save.bind(this);
    this.robot = robot;
    this.cache= {};

    this.robot.brain.on('loaded', () => { return this.cache = this.robot.brain.data.seen || {}; });
  }

  save() {
    // TODO: should we try to only write changes to the db, instead of the entire map?
    return this.robot.brain.data.seen = this.cache;
  }

  add(user, channel, msg) {
    this.robot.logger.debug(`seen.add ${clean(user)} on ${channel}`);
    this.cache[clean(user)] = {
      chan: channel,
      date: new Date() - 0,
      msg
    };
    return this.save();
  }

  last(user) {
    let left;
    return (left = this.cache[clean(user)]) != null ? left : {};
  }

  usersSince(hoursAgo) {
    const HOUR_MILLISECONDS = 60*60*1000;
    const seenSinceTime = new Date(Date.now() - (hoursAgo*HOUR_MILLISECONDS));
    const users = ((() => {
      const result = [];
      for (let nick in this.cache) {
        const data = this.cache[nick];
        if (data.date > seenSinceTime) {
          result.push(nick);
        }
      }
      return result;
    })());
    return users;
  }
}

module.exports = function(robot) {
  const seen = new Seen(robot);

  // Keep track of last msg heard
  robot.hear(/.*/, function(msg) {
    if (!is_pm(msg)) {
      return seen.add((ircname(msg)), (ircchan(msg)), msg.message.text);
    }
  });

  return robot.respond(/seen @?([-\w.\\^|{}`\[\]]+):? ?(.*)/, function(msg) {
    if ((msg.match[1] === "in") && (msg.match[2] === "last 24h")) {
      const users = seen.usersSince(24);
      return msg.send(`Active in ${msg.match[2]}: ${users.join(', ')}`);
    } else {
      robot.logger.debug(`seen check ${clean(msg.match[1])}`);
      const nick = msg.match[1];
      const last = seen.last(nick);
      if (last.date) {
        const date_string = (() => {
          if (config.use_timeago) {
          const timeago = require('timeago');
          return timeago(new Date(last.date));
        } else {
          return `at ${new Date(last.date)}`;
        }
        })();

        return msg.send(`${nick} was last seen ${date_string}` + (last.msg ? (`, saying '${last.msg}'`) : "") + ` in ${last.chan}`);

      } else {
        return msg.send(`I haven't seen ${nick} around lately`);
      }
    }
  });
};
