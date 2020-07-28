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
  console.log(req.body);
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

module.exports = router;
