var express = require("express");
var mongoose = require("mongoose");

const Recruit = require("../models/recruit");
var router = express.Router();




router.post("/api/recruit", async function(req,res,next){
    try{
        console.log(req.body);
    const newUser = await Recruit.create(
        req.body
      );
      res.status(201).json({
        status: "success",
        data: {
          data: newUser,
        },
      });
    next();
    }catch (error) {
      console.log(error);
      res.status(404).json({
        status: "fail",
        message: error,
      });
}});








module.exports = router;