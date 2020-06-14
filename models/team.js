var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema({
    name: String,
    attendance : Boolean
});


module.exports = mongoose.model("Team",TeamSchema);

