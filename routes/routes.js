var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var router = express.Router();
var Team = require("../models/team");


router.get("/", function(req, res) {
  res.render("attendance");
});

router.post("/submit", function(req, res) {
  //some code here
  var payas = req.body.payas;
  var sushant = req.body.sushant;
  var saksham = req.body.saksham;

  var newAtd = { Payas: payas, Sushant: sushant, Saksham: saksham };
  Team.create(newAtd, function(err, newattendance) {
    if (err) {
      console.log(err);
    } else {
      console.log(newattendance);
      res.redirect("/");
    }
  });
  //after adding to db
  // req.flash("success","Attendance Submitted!");
});

<<<<<<< HEAD
router.get("/edit", function(req, res) {
  res.render("edit");
=======
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
    // Get all campgrounds from DB
    Team.find({}, function(err, allAttendance){
       if(err){
           console.log(err);
       } else {
          res.render("view",{attendance:allAttendance});
       }
    });
>>>>>>> a45e4f8ce5210473f9b1df38f3519fcb15b41abc
});

module.exports = router;
