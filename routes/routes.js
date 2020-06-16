var express = require("express");
var mongoose = require("mongoose");
var path = require ("path");

var router = express.Router()

var reqpath = path.join(__dirname,'../');


router.get("/view",function(req,res){
    res.sendFile("view.html",{root: reqpath});
});

router.get("/",function(req,res){
    res.sendFile("attendance.html",{root: reqpath});
});

router.post("/submit",function(req,res){
    //some code here
    console.log(req.body);
    //after adding to db
    // req.flash("success","Attendance Submitted!");
    res.redirect("/");
});

router.get("/edit",function(req,res){
    res.sendFile("edit.html",{root: reqpath});
});

module.exports = router;