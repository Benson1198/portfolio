import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const LinearBar = ({ value }) => {
    return (
        <Box sx={{ p: 2, flexDirection: 'row', mx: 'auto', width: 200, boxShadow: 4 }}>
            <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: 2 }}>
                <Typography variant="h5">
                    h5. Heading
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <LinearProgress variant="determinate" value={value} sx={{ width: '100%' }} />
            </Grid>
        </Box>
    );
}

export default function Skills() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <h2 className='text-center text-2xl p-6'>Skills</h2>
            <Grid container spacing={4}>
                <LinearBar value={70} />
                <LinearBar value={70} />
                <LinearBar value={70} />
                <LinearBar value={70} />
                <LinearBar value={70} />
                <LinearBar value={70} />
                <LinearBar value={70} />
            </Grid>
        </Container>

    );
}
