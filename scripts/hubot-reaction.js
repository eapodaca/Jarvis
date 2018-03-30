/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   https://github.com/jakswa/hubot-reaction
//
// Dependencies:
//   "request"
//   "cheerio"
//
// Configuration:
//   None
// 
// Commands:
//   !reply tag - returns reaction gif from replygif.net, with that tag
// 
// Author:
//   jakswa 
const request = require('request');
const cheerio = require('cheerio');
const { format } = require('util');
module.exports = function(robot) {
  let getGifs;
  robot.parseReplyGifTag = text => text.toLowerCase().replace(/[^\w \-]+/g, '').replace(/--+/g, '').replace(/\ /g, '-');
  robot.hear(/^!reply (.+)$/, function(msg) {
    const tag = robot.parseReplyGifTag(msg.match[1]);
    return getGifs(tag, function(gifs) {
      if (gifs.length === 0) {
        const errorMsg = `no gifs for '${tag}' -- probably invalid category/tag`;
        return robot.send({user: {name: msg.message.user}}, errorMsg);
      } else {
        const ind = Math.floor(Math.random() * gifs.length);
        return msg.send(gifs.eq(ind).attr('src').replace('thumbnail', 'i'));
      }
    });
  });

  // simple, in-memory, hour-long cache of requests
  // (don't run this for years or anything, not cleaning up unused ones :)
  const gifSets = {};
  return getGifs = function(tag, callback) {
    let gifSet = gifSets[tag];
    if (gifSet && (((new Date()) - gifSet.date) > 3600000)) { // 1 hour
      gifSet = (gifSets[tag] = null); // clear old cache item if expired
    }
    if (gifSet) {
      callback(gifSet.gifs); 
      return;
    }
    return request(format('http://replygif.net/t/%s', tag), function(err, resp, body) {
      if (err) {
        callback([]);
        return;
      }
      const gifs = cheerio.load(body)('img.gif');
      gifSets[tag] = {date: new Date(), gifs};
      return callback(gifs);
    });
  };
};
