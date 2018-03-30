/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Returns the weather from thefuckingweather.com
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot what's the weather for <city> - Get the weather for a location
//   hubot what's the weather for <zip> - Get the weather for a zipcode
//
// Author:
//   aaronott

const weather = (msg, query, cb) =>
  msg.http('http://thefuckingweather.com/')
    .query({where: query})
    .header('User-Agent', 'Mozilla/5.0')
    .get()(function(err, res, body) {
      const temp = __guard__(body.match(/<span class="temperature" tempf="\d*">(\d+)/), x => x[1]) || "";
      const remark = __guard__(body.match(/<p class="remark">(.*)</), x1 => x1[1]) || "remark not found";
      const flavor = __guard__(body.match(/<p class="flavor">(.*)</), x2 => x2[1]) || "flavor not found";
      return cb(temp, remark, flavor);
  })
;

module.exports = robot =>
  robot.respond(/(what's|what is) the weather for (.*)/i, msg =>
    weather(msg, msg.match[2], function(temp, remark, flavor) {
      const out = temp + " degrees " + remark + " " + flavor;
      return msg.send(out);
    })
  )
;

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}