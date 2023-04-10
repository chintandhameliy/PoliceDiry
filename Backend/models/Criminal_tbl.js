const mongoose = require("mongoose");

const Criminal_tbl_Schema = new mongoose.Schema({
    crName: String,
    crAddress: String,
    crActivities: String
})

module.exports = mongoose.model("Criminal_tbl",Criminal_tbl_Schema);