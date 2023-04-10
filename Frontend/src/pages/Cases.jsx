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

function Cases() {

    const [cases, setCases] = React.useState([]);
    const [dataedit, setDataedit] = useState([]);
    const { register, handleSubmit, trigger, reset } = useForm();


    React.useEffect(() => {
        getData();
    }, []);

    const handleChange = (e) => {
        setDataedit({
            ...dataedit,
            [e.target.name]: e.target.value,

        });
    }

    let getData = () => {
        axios.get("http://localhost:5000/case")
            .then(function (res) {
                console.log(res.data)
                setCases(res.data);
            })
    }
    let OnAddData = (e) => {
        const Data = e;

        axios.post("http://localhost:5000/case", Data)
            .then(function (res) {
                // setOfficers(res);
            }).then(() => { getData() })

    }

    let EditData =(data)=> {
        console.log(data)
        setDataedit(data)
    }

    let onEdite=(e) => {
        // var Data= e
        console.log(dataedit._id)
        // Data[_id] = dataedit._id
        // console.log(Data);
        const formData = {
            ...dataedit,

        };
        const id=dataedit._id;
        axios.patch(`http://localhost:5000/case/${id}`, formData)
        .then(function (res) {
            console.log(res)
           alert(res.data);
        })
        .then(()=>{getData()})


    }

    let DeleteData =(id)=> {
        console.log(id)
        axios.delete(`http://localhost:5000/case/${id}` )
        // .then(function (res) {
        //     setOfficers(res.data);
        // })
        .then(()=>{getData()})
    }

    return (
        <div>
            <Card sx={{ minWidth: 275, margin: '20px', backgroundColor: 'rgba(5, 10, 13, 0.3)' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 30, textAlign: 'center', color: '#C0E8EE' }} >
                        Manage Cases
                    </Typography>

                    <Grid container p={1} mt={1} borderRadius={1} sx={{ backgroundColor: '#BAD7E9' }} >
                        <Grid item xs={12} sm={6} md={2}>
                            <FormControl sx={{ m: 1, minWidth: 220 }} {...register("cType")}>
                                <InputLabel variant="standard" >
                                    Case Type
                                </InputLabel>
                                <NativeSelect>
                                    <option >Ten</option>
                                    <option >Twenty</option>
                                    <option >Thirty</option>
                                </NativeSelect>
                            </FormControl>
                            <TextField
                                id="Case Place"
                                name="cPlace"
                                label="Case Place"
                                variant="standard"
                                value={dataedit.cPlace}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("cPlace")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="Case Heading"
                                name="cHeading"
                                label="Case Heading"
                                variant="standard"
                                value={dataedit.cHeading}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("cHeading")}
                                onChange={(e) => handleChange(e)}
                            />
                            <InputLabel variant="standard" sx={{ fontSize: 12, ml: 1 }}>
                                Date
                            </InputLabel>
                            <TextField
                                id="Date"
                                name="cDate"
                                type="date"
                                variant="standard"
                                // value={dataedit.cDate}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("cDate")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="cDeatils"
                                name="cDeatils"
                                label="Case Deatils"
                                type="multiline"
                                variant="standard"
                                value={dataedit.cDetails}
                                {...register("cDetails")}
                                onChange={(e) => handleChange(e)}
                            />
                            <TextField
                                id="Name"
                                name="polName"
                                label="Police Name"
                                variant="standard"
                                value={dataedit.polName}
                                // value={dataedit.polName}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("polName")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Person ID Involve"
                                name="cPerson"
                                label="Person ID Involve"
                                variant="standard"
                                value={dataedit.cPerson}
                                {...register("cPerson")}
                                onChange={(e) => handleChange(e)}
                            />
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Name"
                                name="cPersonName"
                                label="person Name"
                                variant="standard"
                                value={dataedit.cPersonName}
                                {...register("cPersonName")}
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
                                    <TableCell align="center">cType</TableCell>
                                    <TableCell align="center">cHeading</TableCell>
                                    <TableCell align="center">cDetails</TableCell>
                                    <TableCell align="center">cPlace</TableCell>
                                    <TableCell align="center">cDate</TableCell>
                                    <TableCell align="center">cPerson</TableCell>
                                    <TableCell align="center">cPersonName</TableCell>
                                    <TableCell align="center">polName</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cases.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="center">{row.cType}</TableCell>
                                        <TableCell align="center">{row.cHeading}</TableCell>
                                        <TableCell align="center">{row.cDetails}</TableCell>
                                        <TableCell align="center">{row.cPlace}</TableCell>
                                        <TableCell align="center">{row.cDate}</TableCell>
                                        <TableCell align="center">{row.cPerson}</TableCell>
                                        <TableCell align="center">{row.cPersonName}</TableCell>
                                        <TableCell align="center">{row.polName}</TableCell>
                                        <TableCell align="center">
                                            <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                                                <Button variant="contained" color="success" onClick={() => EditData(row)} >Edit</Button>
                                            </CardActions>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button variant="contained" color="error" onClick={() => DeleteData(row._id)}>Delete</Button>
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

export default Cases