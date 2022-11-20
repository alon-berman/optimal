const express = require("express");
const router = express.Router();

const AppointmentController = require("../controllers/app.controller.js");

  /**
   * @swagger
   * /create:
   *   post:
   *     description:Create new appointment
   *     responses:
   *       200:
   *        description: Success
   *
   * /get-all:
   *   get:
   *     description: Get all appointments
   *     responses:
   *       200:
   *        description: Success
   *
   * **/

router.get("/get-all", AppointmentController.findAll);

router.get("/appointment/:appointmentId", AppointmentController.findOne);

router.post("/appointment", AppointmentController.create);

router.post("/edit", AppointmentController.update);

router.delete("/appointment", AppointmentController.delete);

module.exports = router;
