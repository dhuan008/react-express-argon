const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", authController.register);
};
