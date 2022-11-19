const express = require("express");
const router = express.Router();

const App = require("../controllers/user.controller.js");

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

router.post("/signup", App.create);

router.post("/login", App.login);

router.get("/get-all", App.findAll);

router.get("/:userId", App.findOne);

router.put("/update", App.update);

router.delete("/delete", App.delete);

module.exports = router;
