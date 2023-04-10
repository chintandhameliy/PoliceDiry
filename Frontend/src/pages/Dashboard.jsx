import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { flexbox } from '@mui/system';
import axios from "axios"

function Dashboard() {

    const [officers, setOfficers] = React.useState([]);
    const [cases, setCases] = React.useState([]);
    const [criminal, setCriminal] = React.useState([]);
    // const [data, setData] = useState(1);
    // console.log(data);

    React.useEffect(() => {
        axios.get("http://localhost:5000/police")
            .then(function (res) {
                console.log(res.data.length)
                setOfficers(res.data);
            })

            axios.get("http://localhost:5000/criminal")
            .then(function (res) {
                console.log(res.data.length)
                setCriminal(res.data);
            })
        
            axios.get("http://localhost:5000/case")
            .then(function (res) {
                console.log(res.data.length)
                setCases(res.data);
            })

    }, []);

    return (
        <div>
            <Typography mt={5} align='center' component="h1" variant="h3">
                Analytics
            </Typography>

            <Box mt={5} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <Card sx={{ minWidth: 275, backgroundColor: 'rgba(217, 217, 217, 0.6)', borderRadius: '20px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 30, textAlign: 'center' }} gutterBottom>
                            Arrested
                        </Typography>
                        <Typography mt={10} sx={{ fontSize: 20, textAlign: 'center' }} gutterBottom>
                            00
                        </Typography>
                        <Typography sx={{ fontSize: 25, textAlign: 'center' }} gutterBottom>
                            Persons
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" color="secondary" sx={{marginBottom: '20px'}}>Click Here</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 275, backgroundColor: 'rgba(217, 217, 217, 0.5)', borderRadius: '20px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 30, textAlign: 'center' }} gutterBottom>
                            Officers
                        </Typography>
                        <Typography mt={10} sx={{ fontSize: 20, textAlign: 'center' }}  gutterBottom>
                            00
                            {/* {officers} */}
                        </Typography>

                        <Typography sx={{ fontSize: 25, textAlign: 'center' }} gutterBottom>
                            Officers
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" color="secondary" sx={{marginBottom: '20px'}} >Click Here</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 275, backgroundColor: 'rgba(217, 217, 217, 0.5)', borderRadius: '20px' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 30, textAlign: 'center' }} gutterBottom>
                            Cases
                        </Typography>
                        <Typography mt={10} sx={{ fontSize: 20, textAlign: 'center' }} gutterBottom>
                            00
                        </Typography>
                        <Typography sx={{ fontSize: 25, textAlign: 'center' }} gutterBottom>
                            Cases
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="outlined" color="secondary" sx={{marginBottom: '20px'}}>Click Here</Button>
                    </CardActions>
                </Card>
            </Box>

        </div>
    )
}

export default Dashboard