Array.prototype.randomElement = function () {
  if(this.length === 0) {
    undefined;
  } else if(this.length === 1) {
    this[0];
  }
  return this[Math.floor(Math.random() * this.length)];
};

const messages = {
  "i\s+like": ["I like @barsandpwn's mom", "I :heart: @barsandpwn's mom"],
  "(drumpf|trump)": "Shhh! He might hear you and try to strangle you with his small hands!",
  "@satire": "@sarif thinks your autocorrect is bad and you should feel bad.",
  "should I": ["Yes!!!", "Ugh, no!", "Absolutely!", "Please No!"],
  "lunch": [
    ":taco:",
    ":hotdog:",
    ":pizza:",
    ":burrito:",
    ":ramen:",
    ":hamburger:",
    ":curry:",
    ":sushi:",
    ":fried_shrimp:",
    ":bento:",
    ":egg:",
    ":spaghetti:",
    ":poultry_leg:"
  ],
  "fine": "https://media.giphy.com/media/3o6UBpHgaXFDNAuttm/giphy.gif",
  "options": [
    "https://media.giphy.com/media/K7QDQeUgrIyFW/giphy.gif",
    "https://media.giphy.com/media/xUA7aUNw61j9Vdzs0U/giphy.gif"
  ]
};

const random = (values) => (res) => res.send(Array.isArray(values) ? values.randomElement() : values);

module.exports = (robot) => {
  Object.keys(messages).forEach((messageKey) => {
    robot.hear(new RegExp(messageKey, "i"), random(messages[messageKey]));
  });
};
