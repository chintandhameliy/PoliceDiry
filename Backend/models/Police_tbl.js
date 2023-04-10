const mongoose = require("mongoose");

const Police_tbl_Schema = new mongoose.Schema({
    empName: String,
    empAddress: String,
    empPhone: String,
    empDes: String,
    empPass: String
})

module.exports = mongoose.model("Police_tbl",Police_tbl_Schema);

