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
const insults = [
    'arsch',
    'arschloch',
    'arse',
    'ass',
    'bastard',
    'bitch',
    'bugger',
    'bollock',
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
    'wichser',
    'anal',
    'anus',
    'arrse',
    'arse',
    'ass',
    'asshat',
    'assfucker',
    'assfukka',
    'asshole',
    'asswhole',
    'ballbag',
    'balls',
    'ballsack',
    'bastard',
    'beastial',
    'beastiality',
    'bellend',
    'bestial',
    'bestiality',
    'biatch',
    'bitch',
    'bitcher',
    'blow job',
    'blowjob',
    'boiolas',
    'bollock',
    'boner',
    'boob',
    'boo+b',
    'breast',
    'buceta',
    'bugger',
    'bunny fucker',
    'butt',
    'butthole',
    'buttmuch',
    'buttplug',
    'carpet muncher',
    'cawk',
    'chink',
    'cipa',
    'clit',
    'clitoris',
    'cnut',
    'cock',
    'cockface',
    'cockhead',
    'cockmunch',
    'cockmuncher',
    'cocksuck',
    'cocksucker',
    'cocksuka',
    'cocksukka',
    'cokmuncher',
    'coon',
    'cox',
    'cum',
    'cummer',
    'cumshot',
    'cunilingus',
    'cunillingus',
    'cunnilingus',
    'cunt',
    'cuntlick',
    'cuntlicker',
    'cyalis',
    'cyberfuc',
    'cyberfuck',
    'cyberfucker',
    'dick',
    'dickhead',
    'dildo',
    'dink',
    'dirsa',
    'doggin',
    'dogging',
    'donkeyribber',
    'doosh',
    'duche',
    'dyke',
    'ejaculate',
    'ejaculatings',
    'ejaculation',
    'fag',
    'faggitt',
    'faggot',
    'faggs',
    'fagot',
    'fanny',
    'fannyflaps',
    'fannyfucker',
    'fanyy',
    'fatass',
    'feck',
    'fecker',
    'felching',
    'fellate',
    'fellatio',
    'fingerfuck',
    'fingerfucker',
    'fistfuck',
    'fistfucker',
    'fistfuckings',
    'flange',
    'fook',
    'fooker',
    'fuck',
    'fucka',
    'fucker',
    'fuckhead',
    'fuckin',
    'fuckingshitmotherfucker',
    'fuckme',
    'fuckwhit',
    'fuckwit',
    'fudge packer',
    'fudgepacker',
    'fuk',
    'fuker',
    'fukker',
    'fukkin',
    'fukwhit',
    'fukwit',
    'fux',
    'gangbang',
    'gaylord',
    'gaysex',
    'goatse',
    'hardcoresex',
    'hell',
    'heshe',
    'hoar',
    'hoare',
    'hoer',
    'homo',
    'hore',
    'horniest',
    'horny',
    'hotsex',
    'jackoff',
    'jap',
    'jism',
    'jiz',
    'jizm',
    'jizz',
    'kawk',
    'knob',
    'knobead',
    'knobend',
    'knobhead',
    'knobjocky',
    'knobjokey',
    'kum',
    'kummer',
    'kunilingus',
    'labia',
    'lmfao',
    'lust',
    'masochist',
    'masterbate',
    'masterbation',
    'masturbate',
    'mofo',
    'mothafuck',
    'mothafucka',
    'mothafuckaz',
    'mothafucker',
    'mothafuckin',
    'mother fucker',
    'motherfuck',
    'motherfucker',
    'motherfuckin',
    'motherfuckka',
    'muff',
    'nazi',
    'nigga',
    'niggah',
    'niggaz',
    'nigger',
    'nob',
    'nob jokey',
    'nobhead',
    'nobjocky',
    'nobjokey',
    'numbnuts',
    'nutsack',
    'orgasm',
    'pawn',
    'pecker',
    'penis',
    'penisfucker',
    'phonesex',
    'phuck',
    'phuk',
    'phukking',
    'phuq',
    'pigfucker',
    'pimpis',
    'piss',
    'pisser',
    'pissflaps',
    'pissin',
    'pissoff',
    'prick',
    'pron',
    'pube',
    'pusse',
    'pussi',
    'pussy',
    'rectum',
    'retard',
    'rimjaw',
    'rimming',
    'sadist',
    'schlong',
    'screwing',
    'scroat',
    'scrote',
    'scrotum',
    'semen',
    'shag',
    'shagger',
    'shaggin',
    'shemale',
    'shit',
    'shitdick',
    'shite',
    'shitey',
    'shitfuck',
    'shitfull',
    'shithead',
    'shiting',
    'shitter',
    'shitting',
    'shitty',
    'skank',
    'slut',
    'smegma',
    'smut',
    'snatch',
    'spunk',
    'teets',
    'teez',
    'testical',
    'testicle',
    'tit',
    'titfuck',
    'tits',
    'titt',
    'tittiefucker',
    'titties',
    'tittyfuck',
    'tittywank',
    'titwank',
    'tosser',
    'turd',
    'twat',
    'twathead',
    'twatty',
    'twunt',
    'twunter',
    'vagina',
    'viagra',
    'vulva',
    'wang',
    'wank',
    'wanker',
    'wanky',
    'whoar',
    'whore',
    'willies',
    'willy'
];

const fineableoffense = [
    'ass',
    'bastard',
    'bitch',
    'cunt',
    'fuck',
    'shit',
    'motherfucker',
    'nigger',
    'pussy'
];

module.exports = function(robot) {
  const regex = new RegExp(`(?:(?:^|[^a-z"])(${fineableoffense.join('|')})(?:[a-z]?ed|es|ing|s)?(?:[^a-z"]|$))(?=(?:[^"]*"[^"]*")*[^"]*$)`, 'i');
  robot.hear(regex, msg => 
  {
    var finecount = ((msg || '').match(regex) || []).length;
    var accountbalance = robot.brain.get(`${msg.envelope.user.name}__accountbalance`) * 1 || 0;
    accountbalance = accountbalance + finecount;
    robot.brain.set(`${msg.envelope.user.name}__accountbalance`, accountbalance);
    var pluralcredits = finecount == 1? 'credit' : 'credits';
    msg.send(`You have been fined ${finecount} ${pluralcredits} for a total of ${accountbalance} credits in violation of the verbal morality statute`);
  });
  
  robot.respond(/insult/i, msg => msg.send(`${insults[Math.floor(Math.random() * insults.length)].replace(/[\\\+]+/g, '')}`));
  
  robot.respond(/givepoints\s+([\w0-9]*)\s+([0-9]*)/i, msg => 
  {
    var username = msg.match[1]? msg.match[1] : 'jarvis';
    var accountbalance = robot.brain.get(`${username}__accountbalance`) * 1 || 0;
    accountbalance = accountbalance + msg.match[2]? Math.abs(Number(msg.match[2])) : 1;
    robot.brain.set(`${username}__accountbalance`, accountbalance);
    msg.send(`${username} now has ${pointscount} credits`);
  });
  
  //9b5ysemyc3yj58nyhjwuo1tesr commanderdirtbag
  //58si1nf84iy67fhjwiboohbaha sarif
  //4bn51hjxqtbm8p59kbh9za6gxc barsandpwn
  //e37h1xepsffz9r46yyafhok9ch celophi
  //1n5wqo6nepfczdnum7eabbsyhc pizzahands
  robot.respond(/whatsmyid/i, msg => msg.send(`${msg.envelope.user.name}`));
};

