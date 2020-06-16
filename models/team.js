var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema({
    Payas : {
        type: Boolean
    },
    Sushant : {
        type: Boolean
    },
    Saksham : {
        type: Boolean
    },
    Date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("Team",TeamSchema);

