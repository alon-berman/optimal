// ###################
// Server Requirements
// ###################
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const Controller = require("./app/controllers/user.controller.js");
const path = require("path");
var bodyParser = require('body-parser')


// ##########################
// Interface definitions
// ##########################
const appointmentApi = require("./app/routes/app.routes");
const userRouteApi = require("./app/routes/user.routes");

// ##########################
// Server definitions
// ##########################
const app = express();
let PORT = 8081;

// ##########################
// Server usage configuration
// ##########################

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// ###################
// Swagger definitions 
// ###################
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
// ###################


// Point express to the root folder of the hosted files 
app.use(express.static(__dirname));


// ###################
// Routing Definitions
// ###################

app.use("/css", express.static(path.join("css")));

app.use("/html", express.static(path.join("html")));

app.get("/", (req, res) => {
  res.sendFile("html/login.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
  res.sendFile("html/sighUp.html", { root: __dirname });
});
app.get("/contactUs", (req, res) => {
  res.sendFile("html/contactUs.html", { root: __dirname });
});

app.post("/contactUs", (req, res) => {
  // Put contact us log
});

app.use("/api/user", userRouteApi);

app.use("/api/appointment", appointmentApi);


app.listen(PORT, () => {
  // print available routes
  app._router.stack.forEach(print.bind(null, []));


  console.log(`Server is listening on port ${PORT}`);
});


// ########
// DEBUG
// #########
function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}