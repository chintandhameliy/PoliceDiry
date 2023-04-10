import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { NativeSelect } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios"
import { useForm } from "react-hook-form";

function Charges() {

    const [charges, setCharges] = React.useState([]);
    const [dataedit, setDataedit] = useState([]);
    const { register, handleSubmit, trigger, reset } = useForm();

    //const [Value, setValues] = useState([])
    const handleChange = (e) => {
        setDataedit({
            ...dataedit,
            [e.target.name]: e.target.value,

        });
    }

    React.useEffect(() => {
        getData();
    }, []);

    let getData = () => {
        axios.get("http://localhost:5000/charges")
            .then(function (res) {
                console.log(res.data)
                setCharges(res.data);

            })
    }

    let OnAddData = (e) => {
        const Data = e;
        console.log(Data)
        axios.post("http://localhost:5000/charges", e)
            .then(function (res) {
            }).then(() => { getData() })

    }

    let DeleteData =(id)=> {
        console.log(id)
        axios.delete(`http://localhost:5000/charges/${id}`, )
        // .then(function (res) {
        //     setOfficers(res.data);
        // })
        .then(()=>{getData()})
    }
    let EditData =(data)=> {
        console.log(data)
        setDataedit(data)
        console.log(Data)
    }

    let onEdite=(e) => {
        var Data= e
        console.log(dataedit._id)
        const formData = {
            ...dataedit,

        };
        console.table(formData)
        const id=dataedit._id;
        axios.patch(`http://localhost:5000/charges/${id}`, formData)
        .then(function (res) {
            console.log(res)
           alert(res.data);
        })
     
        .then(()=>{getData()})


    }

    return (
        <div>
            <Card sx={{ minWidth: 275, margin: '20px', backgroundColor: 'rgba(5, 10, 13, 0.3)' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 30, textAlign: 'center', color: '#C0E8EE' }} >
                        Manage Charges
                    </Typography>

                    <Grid container p={1} mt={1} borderRadius={1} sx={{ backgroundColor: '#BAD7E9' }} >
                        <Grid item xs={12} sm={6} md={2}>
                            <FormControl sx={{ m: 1, minWidth: 220 }} >
                                <InputLabel variant="standard" >
                                    Case Code 
                                </InputLabel>
                                <NativeSelect {...register("caseCode")}>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="Case Heading"
                                name="caseHeading"
                                label="Case Heading"
                                variant="standard"
                                value={dataedit.caseHeading}
                                {...register("caseHeading")}
                                sx={{ m: 1, minWidth: 220 }}
                                onChange={(e) => handleChange(e)}
                            />
                            <TextField
                                id="Name"
                                name="polName"
                                label="Police Name"
                                variant="standard"
                                value={dataedit.polName}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("polName")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Charge Sheet"
                                name="chargeSheet"
                                label="Charge Sheet"
                                multiline
                                rows={4}
                                variant="standard"
                                value={dataedit.chargeSheet}
                                {...register("chargeSheet")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Remark"
                                name="remarks"
                                label="Remark"
                                multiline
                                rows={4}
                                variant="standard"
                                value={dataedit.remarks}
                                {...register("remarks")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="error" >Delete</Button>
                            </CardActions> */}
                            <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                                <Button variant="contained" 
                                // onClick={AddData}
                                onClick={handleSubmit(OnAddData)}
                                >Record</Button>
                            </CardActions>
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                                <Button variant="contained" color="success" 
                                onClick={handleSubmit(onEdite)}
                                >Edit</Button>
                            </CardActions>
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center',m:2 }}>
                                <Button variant="contained" sx={{ backgroundColor: '#ECECEC', color: '#000' }} onClick={reset}>Cancel</Button>
                            </CardActions>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275, margin: '20px', backgroundColor: 'rgba(5, 10, 13, 0.3)' }}>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">caseCode</TableCell>
                                    <TableCell align="center">caseHeading</TableCell>
                                    <TableCell align="center">chargeSheet</TableCell>
                                    <TableCell align="center">remarks</TableCell>
                                    <TableCell align="center">polName</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {charges.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="center">{row.caseCode}</TableCell>
                                        <TableCell align="center">{row.caseHeading}</TableCell>
                                        <TableCell align="center">{row.chargeSheet}</TableCell>
                                        <TableCell align="center">{row.remarks}</TableCell>
                                        <TableCell align="center">{row.polName}</TableCell>
                                        <TableCell align="center">
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                                <Button variant="contained" color="success" onClick={()=> EditData(row)} >Edit</Button>
                            </CardActions>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="error"  onClick={()=> DeleteData(row._id)}>Delete</Button>
                            </CardActions></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default Charges