// Including Packages!
var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  methodOverride = require('method-override'),
  bodyParser = require("body-parser"),
  {check,validationResult} = require("express-validator"),
  apiroutes = require("../attendance/routes/apiroutes");

app.use(bodyParser.urlencoded({ extended: true }));

// Including Routes!
var routes = require("./routes/routes.js");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
//Connection To Database
mongoose.connect(
  "mongodb+srv://payasjain:Payasjain@21@attendance-9wmmr.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology : true },
  (error) => {
    if (!error) {
      console.log("Connection to db successful");
    } else {
      console.log(error);
    }
  }
);


//Including Model
var Team = require("./models/team.js");
var Recruit = require("./models/recruit.js");
app.use("/", routes);
app.use("/",apiroutes);

app.listen(27017, function() {
  console.log("Server Started!");
});
