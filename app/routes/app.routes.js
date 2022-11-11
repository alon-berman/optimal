module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  /**
   * @swagger
   * /create:
   *   post:
   *     description:Create new Message
   *     responses:
   *       200:
   *        description: Success
   *
   * /get-all:
   *   get:
   *     description: Get all Messages
   *     responses:
   *       200:
   *        description: Success
   *
   * **/

  app.post("/create", App.create);

  app.get("/get-all", App.findAll);

  app.get("/message/:messageId", App.findOne);

  app.put("/message", App.update);

  app.delete("/message", App.delete);
};
