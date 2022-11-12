const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const Controller = require("./app/controllers/app.controller.js");
const apiRoute = require("./app/routes/app.routes");
const path = require("path");
const app = express();
let PORT = 8080;

const swaggerOptions = {
  swaggerDefinition:{
    info: {
      title: 'Optimal',
      version: '1.0.0'
    }
  },
  apis:['server.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

//todo create swagger.json to use swagger from '/api-docs'

app.post("/create", Controller.create);

app.get("/get-all", Controller.findAll);

app.get("/message/:messageId", Controller.findOne);

app.put("/message", Controller.update);

app.use("/api", apiRoute);

app.use("/css", express.static(path.join("css")));

app.use("/html", express.static(path.join("html")));

// app.use("/html/images", express.static(path.join("html", "images")));

app.get("/", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("/Projects/Optimal/optimal/html/login.html");
});

app.get("/signup", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("/Projects/Optimal/optimal/html/sighUp.html");
});
app.get("/contactUs", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("/Projects/Optimal/optimal/html/contactUs.html");
});
// app.get("/aboutUs", (req, res) => {
//   //res.json({ message: "Server is running :D" });
//   res.sendFile("/Projects/Optimal/optimal/html/aboutUs.html");
// });

app.delete("/message", Controller.delete);

// require("./app/routes/app.routes.js")(app);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
