var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    flash    = require("connect-flash"),
    session  = require("express-session");
app.use(flash());

app.use(require("express-session")({
    secret : "Blah Blah!!",
    resave : false,
    saveUninitialized: false
}));


mongoose.connect("mongodb://localhost/team");

var Team = require("./models/team.js");

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

app.use(express.static(__dirname));

app.get("/view",function(req,res){
    res.sendFile("view.html",{ root: __dirname});
});

app.get("/",function(req,res){
    res.sendFile("attendance.html",{root:__dirname});
});

app.post("/submit",function(req,res){
    //some code here
    //after adding to db
    req.flash("success","Attendance Submitted!");
    res.redirect("/");
});

app.get("/edit",function(req,res){
    res.sendFile("edit.html",{root:__dirname});
});

app.listen(3000,function(){
    console.log("Server Started!");
});
