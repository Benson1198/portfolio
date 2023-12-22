import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';

const skillList = ['React.js', 'Django', 'Python', 'JavaScript', 'C++', 'HTML/CSS'];

export default function Skills() {
    return (
        <div>
            <h2 className='text-center text-white text-2xl p-6'>Skills</h2>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {skillList.map((skill, index) => (
                        <Grid item xs={4} key={index}>
                            <BasicCard skillName={skill} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </div>
    )
}

const BasicCard = (props) => {
    return (
        <Card >
            <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5">
                    {props.skillName}
                </Typography>
            </CardContent>
        </Card>
    );
}