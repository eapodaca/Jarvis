module.exports = function(robot) {
  robot.router.post("/circle-ci", (req, res) => {
    const data = req.body;
    robot.send({room: "town-square"}, JSON.stringify(data));
    res.send("OK");
  });
};
