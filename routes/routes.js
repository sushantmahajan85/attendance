var express = require("express");
var mongoose = require("mongoose");
var path = require ("path");

var router = express.Router()
var Team = require("../models/team");


router.get("/view",function(req,res){
    res.render("view");
});

router.get("/",function(req,res){
    res.render("attendance");
});

router.post("/submit",function(req,res){
    //some code here
    var payas = req.body.payas;
    var sushant = req.body.sushant;
    var saksham = req.body.saksham;

    var newAtd = {Payas: payas, Sushant: sushant , Saksham: saksham};
    Team.create(newAtd,function(err,newattendance){
        if(err){
            console.log(err);
        }
        else{
            console.log(newattendance);
            res.redirect("/");
        }
    })
    //after adding to db
    // req.flash("success","Attendance Submitted!");
   
});

router.get("/edit",function(req,res){
    res.render("edit");
});

module.exports = router;