const Charges_tbl = require("../models/Charges_tbl");

const getCharges = function (request, response) {
    Charges_tbl.find(function (error, foundItems) {
        if (error) {
            console.log(error);
        }
        else {
            response.send(foundItems);
        }
    });
}

const postCharges = function (request, response) {
    const newCharges = new Charges_tbl({
        caseCode: request.body.caseCode,
        caseHeading: request.body.caseHeading,
        chargeSheet: request.body.chargeSheet,
        remarks: request.body.remarks,
        polName: request.body.polName,
    });

    newCharges.save(function (error) {
        if (!error) {
            response.send("Successfully added!!!");
        } else {
            response.send(error);
        }
    });
}

const deleteCharges = function (request, response) {
    Charges_tbl.deleteOne({ _id: request.params._id }, function (error) {
        if (!error) {
            response.send("Successfully deleted.")
        } else {
            response.send(error);
        }
    })
}

const getChargesById = function(request,response){
    Charges_tbl.find({_id:request.params._id},function(error,foundItem){
        if (!error) {
            response.send(foundItem);
        } else {
            response.send(error);
        }
    })
}

const updateCharges = function(request,response){
    Charges_tbl.update(
        {_id: request.params._id},
        {$set:request.body},
        function(error){
            if (!error) {
                response.send("successfully updated!")
            } else {
                response.send(error);
            }
        })
}

module.exports = { getCharges, postCharges, deleteCharges, getChargesById, updateCharges };