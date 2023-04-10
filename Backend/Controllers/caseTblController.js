const Case_tbl = require("../models/Case_tbl");

const getCase = function (request, response) {
    Case_tbl.find(function (error, foundItems) {
        if (error) {
            console.log(error);
        }
        else {
            response.send(foundItems);
        }
    });
}

const postCase = function (request, response) {
    const newCase = new Case_tbl({
        cType: request.body.cType,
        cHeading: request.body.cHeading,
        cDetails: request.body.cDetails,
        cPlace: request.body.cPlace,
        cDate: request.body.cDate,
        cPerson: request.body.cPerson,
        cPersonName: request.body.cPersonName,
        polName: request.body.polName
    });

    newCase.save(function (error) {
        if (!error) {
            response.send("Successfully added!!!");
        } else {
            response.send(error);
        }
    });
}

const deleteCase = function(request,response){
    Case_tbl.deleteOne({_id:request.params._id},function(error){
        if (!error) {
            response.send("Successfully deleted.")
        }else{
            response.send(error);
        }
    })
}

const getCaseById = function(request,response){
    Case_tbl.find({_id:request.params._id},function(error,foundItem){
        if (!error) {
            response.send(foundItem);
        } else {
            response.send(error);
        }
    })
}

const updateCase = function(request,response){
    Case_tbl.update(
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

module.exports = { getCase, postCase, deleteCase, getCaseById, updateCase };