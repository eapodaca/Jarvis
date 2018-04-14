module.exports = (robot) => {
  robot.router.post("/circle-ci", (req, res) => {
    const data = req.body.payload;
    message = "";
    if(!data.failed) {
      message = `:ok_man:  I've been deployed successfully by ${data.user.login}`;
    } else {
      message = `:interrobang:  My deploy failed. Shame on you ${data.user.login}.`;
    }
    message = `${message}\nChanges [here](${data.compare}).`
    robot.messageRoom("duxb9ptk8pr8mcwnhounggg51y", message);
    res.send("OK");
  });
  robot.router.get("/circle-ci-users", (req, res) => {
    const data = req.body;
    res.send(JSON.stringify(robot.brain.users()));
  });
};
