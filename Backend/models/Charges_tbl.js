const mongoose = require("mongoose");

const Charges_tbl_Schema = new mongoose.Schema({
    caseCode: Number,
    caseHeading: String,
    chargeSheet: String,
    remarks: String,
    polName: String
})

module.exports = mongoose.model("Charges_tbl",Charges_tbl_Schema);