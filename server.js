// DEPENDENCIES
// ==================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Create an instance of the express app
var app = express();

// Specify the port
var PORT = process.env.port || 8181;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + "/public"));

var burgers_controller = require('./controllers/burgers_controller.js');
burgers_controller(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});