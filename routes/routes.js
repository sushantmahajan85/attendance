var express = require("express");
var mongoose = require("mongoose");
var path = require ("path");

var router = express.Router()
var Team = require("../models/team");



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
    Team.find({}, function(err, allAttendance){
        if(err){
            console.log(err);
        } else {
           res.render("edit",{attendance:allAttendance});
        }
     });
});

router.get("/view", function(req, res){
    
    Team.find({}, function(err, allAttendance){
       if(err){
           console.log(err);
       } else {
          res.render("view",{attendance:allAttendance});
       }
    });
});

router.post("/edit/:id", function(req, res){
    Team.findByIdAndUpdate(req.params.id, req.body.meeting, function(err, updatedatt){
       if(err){
           res.redirect("/");
       } else {
           console.log(err);
       }
    });
});

module.exports = router;