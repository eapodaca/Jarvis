/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Allows Hubot to roll dice
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot roll (die|one) - Roll one six-sided dice
//   hubot roll dice - Roll two six-sided dice
//   hubot roll <x>d<y> - roll x dice, each of which has y sides
//
// Author:
//   ab9

module.exports = function(robot) {
  robot.respond(/roll (die|one)/i, msg => msg.reply(report([rollOne(6)])));
  robot.respond(/roll dice/i, msg => msg.reply(report(roll(2, 6))));
  return robot.respond(/roll (\d+)d(\d+)/i, function(msg) {
    const dice = parseInt(msg.match[1]);
    const sides = parseInt(msg.match[2]);
    const answer = sides < 1 ?
      "I don't know how to roll a zero-sided die."
    : dice > 100 ?
      "I'm not going to roll more than 100 dice for you."
    :
      report(roll(dice, sides));
    return msg.reply(answer);
  });
};

var report = function(results) {
  if (results != null) {
    switch (results.length) {
      case 0:
        return "I didn't roll any dice.";
      case 1:
        return `I rolled a ${results[0]}.`;
      default:
        var total = results.reduce((x, y) => x + y);
        var finalComma = (results.length > 2) ? "," : "";
        var last = results.pop();
        return `I rolled ${results.join(", ")}${finalComma} and ${last}, making ${total}.`;
    }
  }
};

var roll = (dice, sides) => __range__(0, dice, false).map((i) => rollOne(sides));

var rollOne = sides => 1 + Math.floor(Math.random() * sides);

function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}