const Police_tbl = require("../models/Police_tbl");

const getPolice = function (request, response) {
    Police_tbl.find(function (error, foundItems) {
        if (error) {
            console.log(error);
        }
        else {
            response.send(foundItems);
        }
    });
}

const postPolice = function (request, response) {
    const newPolice = new Police_tbl({
        empName: request.body.empName,
        empAddress: request.body.empAddress,
        empPhone: request.body.empPhone,
        empDes: request.body.empDes,
        empPass: request.body.empPass
    });

    newPolice.save(function (error) {
        if (!error) {
            response.send("Successfully added!!!");
        } else {
            response.send(error);
        }
    });
}


const deletePolice = function (request, response) {
    Police_tbl.deleteOne({ _id: request.params._id }, function (error) {
        if (!error) {
            response.send("Successfully deleted.")
        } else {
            response.send(error);
        }
    })
}

const getPoliceById = function(request,response){
    Police_tbl.find({_id:request.params._id},function(error,foundItem){
        if (!error) {
            response.send(foundItem);
        } else {
            response.send(error);
        }
    })
}

const updatePolice = function(request,response){
    Police_tbl.update(
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

module.exports = { getPolice, postPolice, deletePolice, getPoliceById, updatePolice };