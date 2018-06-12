module.exports = (robot) => {
  robot.router.post("/circle-ci", (req, res) => {
    const data = req.body.payload;
    const username = data.all_commit_details[0].author_login;
    message = "";
    if(!data.failed) {
      message = `:ok_man:  I've been deployed successfully by ${username}.`;
    } else {
      message = `:interrobang:  My deploy failed. Shame on you ${username}.`;
    }
    const ticks = "```"
    message = `${message} [[Changes](${data.compare})]\n> ${data.subject}`
    robot.messageRoom("33oaeiebpif1pdtc9uimenzkzh", message);
    res.send("OK");
  });
  robot.router.get("/circle-ci-users", (req, res) => {
    const data = req.body;
    res.send(JSON.stringify(robot.brain.users()));
  });
};
