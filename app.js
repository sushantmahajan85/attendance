
// Including Packages!
var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));


// Including Routes!
var routes = require("./routes/routes.js");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

//Connection To Database
mongoose.connect("mongodb://localhost:27017/tff",{'useNewUrlParser': true},(error)=>{
    if(!error){
        console.log("Connection to db successful");
    }
    else{
        console.log("Error connecting to db");
    }
});

//Including Model
var Team = require("./models/team.js");


app.use("/",routes);


app.listen(27017,function(){
    console.log("Server Started!");
});
