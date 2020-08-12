var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var router = express.Router();
var Team = require("../models/team");
const recruit = require("../models/recruit");

router.get("/attendance", function(req, res) {
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

router.post("/recsubmit",function(req,res){
   recruit.create(req.body.data,function(err,newdetails){
     if(err){
       res.redirect("/");
     }
     else{
       res.redirect("/recruit");
     }
   })
});
router.get("/recruit",function(req,res){
  res.render("recruit");
});


router.get("/edit", function(req, res) {
  Team.find({}, function(err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("edit", { attendance: allAttendance });
    }
  });
});

router.get("/view", function(req, res) {
  Team.find({}, function(err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("view", { attendance: allAttendance });
    }
  });
});
router.get("/attendance",function(req,res){
  res.render("attendance");
})

router.put("/:id", async function(req, res) {
  console.log(req.params.id);
  const updated = await Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    function(err, updatedatt) {
      if (!err) {
        res.redirect("/edit");
      } else {
        console.log("error");
      }
    }
  );
  console.log(updated);
});
router.get("/",function(req,res){
  res.render("index");
});
router.get("/2016",function(req,res){
  res.render("2016");
});
router.get("/2017",function(req,res){
  res.render("2017");
});
router.get("/2018",function(req,res){
  res.render("2018");
});
router.get("/core_pic",function(req,res){
  res.render("core_pic");
});
router.get("/coupons",function(req,res){
  res.render("coupons");
});
router.get("/events",function(req,res){
  res.render("events");
});
router.get("/exbo_pic",function(req,res){
  res.render("exbo_pic");
});
router.get("/faculty_pic",function(req,res){
  res.render("faculty_pic");
});
router.get("/TFF",function(req,res){
  res.render("TFF");
});




module.exports = router;
