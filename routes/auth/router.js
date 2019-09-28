const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", (req, res, next) => {
    console.log(req.body);

    res.send(true);
  });
};
