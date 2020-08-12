var mongoose = require("mongoose");

var RecruitSchema = new mongoose.Schema({
    name : {
        type: String
    },
    email : {
        type: String 
    },
    hostel : {
        type: String
    },
    phone : {
        type: Number
    },
    Date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Recruit",RecruitSchema);
