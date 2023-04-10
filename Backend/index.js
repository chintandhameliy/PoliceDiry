//requirements
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const policeTblController = require("./Controllers/policeTblController");
const criminalTblController = require("./Controllers/criminalTblController");
const chargesTblController = require("./Controllers/chargesTblController");
const caseTblController = require("./Controllers/caseTblController");
const Police_tbl = require("./models/Police_tbl");

const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// database connctivity
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/policeDB",{ useNewUrlParser: true });


// ===============================REST API==========================================

//home route
app.get("/",function(request,response){
    response.send({ info: "Police API" });
});

//login
app.post("/login",async(req,res)=>{

    try{
        const checkuser = await Police_tbl.findOne(req.body)
        
        if(checkuser != null){
            res.json(checkuser)

        }else{
            res.json("notexist")
        }
    }catch(e){
        res.json("notexist")
    }
});

//police_tbl
app.get("/police",policeTblController.getPolice);
app.post("/police",policeTblController.postPolice);
app.delete("/police/:_id",policeTblController.deletePolice);
app.get("/police/:_id",policeTblController.getPoliceById);
app.patch("/police/:_id",policeTblController.updatePolice);


//criminal_tbl
app.get("/criminal",criminalTblController.getCriminal);
app.post("/criminal",criminalTblController.postCriminal);
app.delete("/criminal/:_id",criminalTblController.deleteCriminal);
app.get("/criminal/:_id",criminalTblController.getCriminalById);
app.patch("/criminal/:_id",criminalTblController.updateCriminal);


//charges_tbl
app.get("/charges",chargesTblController.getCharges);
app.post("/charges",chargesTblController.postCharges);
app.delete("/charges/:_id",chargesTblController.deleteCharges);
app.get("/charges/:_id",chargesTblController.getChargesById);
app.patch("/charges/:_id",chargesTblController.updateCharges);


//case_tbl
app.get("/case",caseTblController.getCase);
app.post("/case",caseTblController.postCase);
app.delete("/case/:_id",caseTblController.deleteCase);
app.get("/case/:_id",caseTblController.getCaseById);
app.patch("/case/:_id",caseTblController.updateCase);

app.listen(5000,function(){
    console.log("Server is up @ http://localhost:5000/");
})