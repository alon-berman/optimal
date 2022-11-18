const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const Controller = require("./app/controllers/user.controller.js");
const apiRoute = require("./app/routes/app.routes");
const apiUserRoute = require("./app/routes/user.routes");
const path = require("path");
const app = express();
let PORT = 8081;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Optimal",
      version: "1.0.0",
    },
  },
  apis: ["server.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Point express to the root folder of the hosted files 
app.use(express.static(__dirname));

/*
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-1no8m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URL)
	.then( () => console.log('connectted to db))
	.catch((error) => console.log(error));er
*/

//todo create swagger.json to use swagger from '/api-docs'

app.post("/create", Controller.create);

app.get("/get-all", Controller.findAll);

app.get("/message/:messageId", Controller.findOne);

app.put("/message", Controller.update);

app.use("/api/user", apiUserRoute);

app.use("/api", apiRoute);

app.use("/css", express.static(path.join("css")));

app.use("/html", express.static(path.join("html")));

// app.use("/html/images", express.static(path.join("html", "images")));

app.get("/", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("html/login.html", { root: __dirname });
});

app.post("/signup", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("html/sighUp.html", { root: __dirname });
});
app.get("/contactUs", (req, res) => {
  //res.json({ message: "Server is running :D" });
  res.sendFile("html/contactUs.html", { root: __dirname });
});

app.delete("/message", Controller.delete);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
