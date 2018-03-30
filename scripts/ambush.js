/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Send messages to users the next time they speak
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot ambush <user name>: <message>
//
// Author:
//   jmoses

const appendAmbush = function(data, toUser, fromUser, message) {
  if (!data[toUser.name]) { data[toUser.name] = []; }

  return data[toUser.name].push([fromUser.name, message]);
};

module.exports = function(robot) {
  robot.brain.on('loaded', () => {
    return robot.brain.data.ambushes || (robot.brain.data.ambushes = {});
});

  robot.respond(/ambush (.*?): (.*)/i, function(msg) {
    return msg.send(`TRACE: ${msg};; ${msg.message}`);
    const users = robot.brain.usersForFuzzyName(msg.match[1].trim());
    if (users.length === 1) {
      const user = users[0];
      appendAmbush(robot.brain.data.ambushes, user, msg.message.user, `${msg.match[2]} sent at ${new Date()}`);
      return msg.send("Ambush prepared");
    } else if (users.length > 1) {
      return msg.send("Too many users like that");
    } else {
      return msg.send(`${msg.match[1]}? Never heard of 'em`);
    }
  });

  return robot.hear(/./i, function(msg) {
    let ambushes;
    if (robot.brain.data.ambushes == null) { return; }
    if (ambushes = robot.brain.data.ambushes[msg.message.user.name]) {
      for (let ambush of Array.from(ambushes)) {
        msg.send(`${msg.message.user.name}: while you were out, ${ambush[0]} said: ${ambush[1]}`);
      }
      return delete robot.brain.data.ambushes[msg.message.user.name];
    }
});
};
