/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   Watch your language!
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//
// Author:
//   whitman, jan0sch

module.exports = function(robot) {

  const words = [
    'arsch',
    'arschloch',
    'arse',
    'ass',
    'bastard',
    'bitch',
    'bugger',
    'bollocks',
    'bullshit',
    'cock',
    'cunt',
    'damn',
    'damnit',
    'depp',
    'dick',
    'douche',
    'fag',
    'fotze',
    'fuck',
    'kacke',
    'piss',
    'pisse',
    'scheisse',
    'schlampe',
    'shit',
    'wank',
    'wichser'
  ];
  const regex = new RegExp(`(?:^|\\W)(${words.join('|')})(?:\\w?ed|es|ing|s)?(?:\\W|$)`, 'i');

  return robot.hear(regex, msg => msg.send('You have been fined one credit for a violation of the verbal morality statute.'));
};
