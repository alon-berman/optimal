const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const Controller = require("./app/controllers/app.controller.js");

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

app.delete("/message", Controller.delete);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
