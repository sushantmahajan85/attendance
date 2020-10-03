var mongoose = require("mongoose");

var RecruitSchema = new mongoose.Schema({
    name : {
        type: String
    },
    message : {
        type: String
    },
    phone : {
        type: Number
    },
    gender : {
        type: String
    },
    rateQ1 : {
        type: String
    },
    rateQ2 : {
        type: String
    },
    rateQ3 : {
        type: String
    },
    rateQ4 : {
        type: String
    },
    rateQ5 : {
        type: String
    },
    value : {
        type: String   
    },
    roll : {
        type : Number
    },
    branch : {
        type : String
    },
    // CG : {
    //     type: Number
    // },
    famous : {
        type: String
    },
    place : {
        type: String
    },
    des : {
        type: String
    },
    timeDevote : {
        type : String
    },
    otherSocities : {
        type : String
    },
    Hobbies : {
        type : String
    },
    Date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Recruit",RecruitSchema);
