var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");
//     flash    = require("connect-flash"),
//     session  = require("express-session");
// app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(require("express-session")({
//     secret : "Blah Blah!!",
//     resave : false,
//     saveUninitialized: false
// }));

var routes = require("./routes/routes.js");

mongoose.connect(
  "mongodb://localhost:27017/tff",
  { useNewUrlParser: true },
  (error) => {
    if (!error) {
      console.log("Connection to db successful");
    } else {
      console.log("Error connecting to db");
    }
  }
);

var Team = require("./models/team.js");
app.use(express.static(__dirname));

app.use("/", routes);

app.listen(27017, function() {
  console.log("Server Started!");
});
