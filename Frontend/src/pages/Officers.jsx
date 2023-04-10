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


function Officers() {

    const [officers, setOfficers] = useState([]);
    // const [dataedit, setDataedit] = useState([]);
    const { register, handleSubmit, trigger, reset } = useForm();


    React.useEffect(() => {
        getData();
    }, []);

    // ###############################################
    const [Value, setValues] = useState([])
    const handleChange = (e) => {
        setValues({
            ...Value,
            [e.target.name]: e.target.value,

        });
    }

    //  ###############################################

    let getData = () => {
        axios.get("http://localhost:5000/police")
            .then(function (res) {
                console.log(res.data)
                setOfficers(res.data);
            })
    }

    let DeleteData = (id) => {
        console.log(id)
        axios.delete(`http://localhost:5000/police/${id}`,)
            // .then(function (res) {
            //     setOfficers(res.data);
            // })
            .then(() => { getData() })
    }
    let EditData = (data) => {
        console.log(data)

        setValues(data)
    }

    let onEdite = (e) => {
        var Data =
            // console.log(dataedit._id)
            console.log(Value._id)
        const formData = {
            ...Value,

        };
        console.table(formData);
        const id = Value._id;
        axios.patch(`http://localhost:5000/police/${id}`, formData)
            .then(function (res) {
                console.log(res)
                alert(res.data);
            })
            
            .then(() => { getData() })


    }
    let OnAddData = (e) => {
        const Data = e;

        axios.post("http://localhost:5000/police", Data)
            .then(function (res) {
                // setOfficers(res);
            }).then(() => { getData() })

    }


    return (
        <div>
            <Card sx={{ minWidth: 275, margin: '20px', backgroundColor: 'rgba(5, 10, 13, 0.3)' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 30, textAlign: 'center', color: '#C0E8EE' }} >
                        Manage Officers
                    </Typography>

                    <Grid container p={1} mt={1} borderRadius={1} sx={{ backgroundColor: '#BAD7E9' }} >
                        <Grid item xs={12} sm={6} md={2}>
                            <FormControl sx={{ m: 1, minWidth: 220 }} {...register("empDes")}>
                                <InputLabel variant="outlined" >
                                    Designation
                                </InputLabel>
                                <NativeSelect variant="outlined" {...register("empDes")}>
                                    <option >SI</option>
                                    <option >ASI</option>
                                    <option >DGP</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="Name"
                                name="empName"
                                label="Name"
                                variant="outlined"
                                value={Value.empName}
                                sx={{ m: 1, minWidth: 220 }}
                                {...register("empName")}
                                onChange={(e) => handleChange(e)}
                            />
                            <FormControl sx={{ m: 1, minWidth: 220 }} >
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup row name="row-radio-buttons-group" >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" name="male" {...register("gender")} />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" name="Female" {...register("gender")} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Address"
                                name="empAddress"
                                label="Address Line 1"
                                type="multiline"
                                variant="outlined"
                                {...register("empAddress")}
                                value={Value.empAddress}
                                onChange={(e) => handleChange(e)}
                            />
                            {/* <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Address"
                                name="Address"
                                label="Address Line 2"
                                type="multiline"
                                variant="standard"
                                {...register("Address1")}
                            /> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Phone"
                                name="empPhone"
                                label="Phone"
                                value={Value.empPhone}
                                variant="outlined"
                                {...register("empPhone")}
                                onChange={(e) => handleChange(e)}
                            />
                            <TextField
                                sx={{ m: 1, minWidth: 220 }}
                                id="Password"
                                name="empPass"
                                label="Password"
                                type="password"
                                value={Value.empPass}
                                variant="outlined"
                                {...register("empPass")}
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
                                    onClick={(e) => { onEdite(e) }}
                                >Edit</Button>
                            </CardActions>
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
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
                                    <TableCell align="center">Phone</TableCell>
                                    <TableCell align="center">Designation</TableCell>
                                    <TableCell align="center">Password</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {officers.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="center">{row.empName}</TableCell>
                                        <TableCell align="center">{row.empAddress}</TableCell>
                                        <TableCell align="center">{row.empPhone}</TableCell>
                                        <TableCell align="center">{row.empDes}</TableCell>
                                        <TableCell align="center">{row.empPass}</TableCell>
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

export default Officers