const DBHandler = require("../model/user.model.js");

// Create and Save a new Message
exports.create = async (req, res) => {
  console.log(req.body);
  
  await DBHandler.saveItem({email: req.body.email, password: req.body.password}).then((user) => {
    if (!user) {
      res.sendFile("html/login.html", { root: __dirname });
    } else if (user.isAdmin === true) {
      res.sendFile("html/admin.html", { root: __dirname });
    } else {
      res.sendFile("html/home.html", { root: __dirname });
    }
  }).catch((err) => {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Message not found with id " + req.params.messageId,
      });
    }
    return res.status(500).send({
      message: "Error retrieving message with id " + req.params.messageId,
    });
  });
}

// Retrieve all messages from the database. 
exports.findAll = async (req, res) => {
  try {
    const users = await DBHandler.getAll();
    console.log("here");
    console.log(users);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving messages.",
    });
  }
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

exports.login = (req, res) => {
  console.log(req.body);
  const { uname, psw } = req.body;
  DBHandler.getByEmailPass(uname, psw).then((user) => {
    if (!user) {
      res.sendFile("html/login.html", { root: __dirname });
    } else if (user.isAdmin === true) {
      res.sendFile("html/admin.html", { root: __dirname });
    } else {
      res.sendFile("html/home.html", { root: __dirname });
    }
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
