const express = require("express");
const router = express.Router();

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

router.post("/", App.create);

router.post("/login", App.login);

router.get("/get-all", App.findAll);

router.get("/message/:messageId", App.findOne);

router.put("/message", App.update);

router.delete("/message", App.delete);

module.exports = router;
