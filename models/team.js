var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    name: String,
    attendance : Boolean
});


module.exports = mongoose.model("Team",teamSchema);

