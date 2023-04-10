const mongoose = require("mongoose");

const Case_tbl_Schema = new mongoose.Schema({
    cType : String,
    cHeading: String,
    cDetails: String,
    cPlace: String,
    cDate: Date,
    cPerson: Number,
    cPersonName : String,
    polName: String
})

module.exports = mongoose.model("Case_tbl",Case_tbl_Schema);