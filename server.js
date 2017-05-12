const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const exphbs = require("express-handlebars");
const connection = require("./config/connection.js");
const router = require("./routes/api");

// Requiring our models for syncing
const db = require("./models");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Use handlebars information for formatting
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import connection from config file and connect to MySQL database.

// Import router from controller file
const {FindAll, Create, Update} = require("./controllers/burgers_controllers.js");
app.use(router);
//Listen on specified port
// app.listen(PORT, () => {
//   console.log("App listening on port: " + PORT);
// });

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
