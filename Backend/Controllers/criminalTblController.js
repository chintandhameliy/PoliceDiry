const Criminal_tbl = require("../models/Criminal_tbl");

const getCriminal = function (request, response) {
    Criminal_tbl.find(function (error, foundItems) {
        if (error) {
            console.log(error);
        }
        else {
            response.send(foundItems);
        }
    });
}

const postCriminal = function (request, response) {
    const newCriminal = new Criminal_tbl({
        crName: request.body.crName,
        crAddress: request.body.crAddress,
        crActivities: request.body.crActivities,
    });

    newCriminal.save(function (error) {
        if (!error) {
            response.send("Successfully added!!!");
        } else {
            response.send(error);
        }
    });
}


const deleteCriminal = function (request, response) {
    Criminal_tbl.deleteOne({ _id: request.params._id }, function (error) {
        if (!error) {
            response.send("Successfully deleted.")
        } else {
            response.send(error);
        }
    })
}

const getCriminalById = function(request,response){
    Criminal_tbl.find({_id:request.params._id},function(error,foundItem){
        if (!error) {
            response.send(foundItem);
        } else {
            response.send(error);
        }
    })
}

const updateCriminal = function(request,response){
    Criminal_tbl.update(
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

module.exports = { getCriminal, postCriminal, deleteCriminal, getCriminalById, updateCriminal };