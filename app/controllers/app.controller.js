// App stands for appointment

const DBHandler = require("../model/app.model.js");

// Create and Save a new Message
exports.create = async (req, res) => {
  console.log(req.body);
  await DBHandler.saveItem(req.body)
    .then((data) => {
      res.redirect("/html/appointment.html");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the data.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = async (req, res) => {
  await DBHandler.getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  DBHandler.getById(req.params.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.messageId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  DBHandler.updateExisting(req.body.messageId, req.body.messageValue)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + JSON.stringify(req),
        });
      }
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.body.messageId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + JSON.stringify(req.body),
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  DBHandler.deleteItem(req.body.messageId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.body.messageId,
        });
      }
      res.send("message #" + data + "deleted successfully!");
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.body.messageId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.body.messageId,
      });
    });
};
