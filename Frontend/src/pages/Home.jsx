import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Button } from '@mui/material';

function Home() {
    return (
        <div>
            <Box display="flex" alignItems="center" flexDirection="column" mt={5}>
                <Typography component="h1" variant="h2">
                    Welcome to
                </Typography>
                <Typography color="error.main" component="h1" variant="h2">
                    Plice Diary
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" mt={15}>
                <Typography color="#2a3eb1" align='center' component="h1" variant="h3">
                    Database for local Police Station
                </Typography>
                <Button variant="outlined" style={{
                    borderRadius: 35,
                    borderWidth: "3px",
                    borderColor: "#000",
                    backgroundColor: "#81d4fa",
                    padding: "15px",
                    fontSize: "18px",
                    marginTop: "20px",
                    color: "#000"
                }}>Go To Analytics</Button>
            </Box>
        </div>
    )
}

export default Home