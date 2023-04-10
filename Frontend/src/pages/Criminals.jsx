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

// table design 
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios"
import { useForm } from "react-hook-form";


function Criminals() {

    const [criminals, setCriminals] = React.useState([]);
    const [dataedit, setDataedit] = useState([]);
    const { register, handleSubmit, trigger, reset } = useForm();


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
        axios.get("http://localhost:5000/criminal")
            .then(function (res) {
                console.log(res.data)
                setCriminals(res.data);

            })
    }

    let OnAddData = (e) => {
        const Data = e;
        console.log(e)
        axios.post("http://localhost:5000/criminal", Data)
            .then(function (res) {
                // setOfficers(res);
            }).then(() => { getData() })

    }

    let DeleteData =(id)=> {
        console.log(id)
        axios.delete(`http://localhost:5000/criminal/${id}`, )
        // .then(function (res) {
        //     setOfficers(res.data);
        // })
        .then(()=>{getData()})
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

        axios.patch(`http://localhost:5000/criminal/${id}`, formData)
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
                        Manage Criminals
                    </Typography>

                    <Grid container p={1} mt={1} borderRadius={1} sx={{ backgroundColor: '#BAD7E9' }} >

                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="Name"
                                name="crName"
                                label="Name"
                                variant="standard"
                                value={dataedit.crName}
                                {...register("crName")}
                                sx={{ m: 1, minWidth: 220, ml: 4 }}
                                onChange={(e) => handleChange(e)}
                            />
                            <FormControl sx={{ m: 1, minWidth: 220, ml: 4 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup row name="row-radio-buttons-group">
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220, ml: 6 }}
                                id="Address"
                                name="crAddress"
                                label="Address Line 1"
                                type="multiline"
                                variant="standard"
                                value={dataedit.crAddress}
                                {...register("crAddress")}
                                onChange={(e) => handleChange(e)}
                            />
                            {/* <TextField
                                sx={{ m: 1, minWidth: 220, ml: 6 }}
                                id="Address"
                                name="Address"
                                label="Address Line 2"
                                type="multiline"
                                variant="standard"
                            /> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220, ml: 8 }}
                                id="standard-multiline-static"
                                label="Activities Involved"
                                name="crActivities"
                                multiline
                                rows={4}
                                variant="standard"
                                value={dataedit.crActivities}
                                {...register("crActivities")}
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                          
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
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">Activities</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {criminals.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="center">{row.crName}</TableCell>
                                        <TableCell align="center">{row.crAddress}</TableCell>
                                        <TableCell align="center">{row.crActivities}</TableCell>
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

export default Criminals