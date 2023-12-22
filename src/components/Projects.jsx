import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const cards = [{
    title: "AI SUMMARIZER",
    desc: "A website to extract and summarize news/article from a URL with help of GPT",
    link: "https://gentle-swan-c1b2b7.netlify.app/",
    github: "https://github.com/Benson1198/AI-Summarizer",
    image: "https://private-user-images.githubusercontent.com/34964177/279667053-4af99da9-6164-45ed-8768-7421692913f2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMzg2MzUsIm5iZiI6MTcwMzIzODMzNSwicGF0aCI6Ii8zNDk2NDE3Ny8yNzk2NjcwNTMtNGFmOTlkYTktNjE2NC00NWVkLTg3NjgtNzQyMTY5MjkxM2YyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA5NDUzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0ZjYwMTYwNTU3NmM0NTIwZWI3OGE2NmZmMDQyOTRmZjU1YTY1NGM3NjhiNzVlNmY5YzcwZTU2NDM4MjU5NTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qoA7kWs9Th70-Hgl0kUJ6_HIqcBZIZabeM_UJFsshG0"
},

{
    title: "DALL - E",
    desc: "An AI Image generation website, with community sharing feature",
    link: "https://gentle-swan-c1b2b7.netlify.app/",
    github: "https://github.com/Benson1198/Dall-e",
    image: "https://private-user-images.githubusercontent.com/34964177/279663088-ec3fe9be-1594-454d-ac53-8102cbac8d1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMzg3NDYsIm5iZiI6MTcwMzIzODQ0NiwicGF0aCI6Ii8zNDk2NDE3Ny8yNzk2NjMwODgtZWMzZmU5YmUtMTU5NC00NTRkLWFjNTMtODEwMmNiYWM4ZDFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA5NDcyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhYTU2OGM1NTA4ZWQ0YTM4ZjQ3Mjk1NjBmYjQwNDZiMjdlYjFjMThlYmJlMGNjMzM1ODM5MTFkMmM0ZjNkNWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tXmII9d459th4NISSX_WgR3LSasA6ai5HvVzhL6fERg"
},
{
    title: "E-COMMERCE WEBSITE",
    desc: "A fully functional E -Commerce website with user and guest checkout capabilities",
    link: "https://github.com/Benson1198/Ecommerce-django",
    github: "https://github.com/Benson1198/Ecommerce-django",
    image: "https://private-user-images.githubusercontent.com/34964177/292457761-e16961e5-f62f-467f-a9db-1e2275a1a70a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMyMzg5NTIsIm5iZiI6MTcwMzIzODY1MiwicGF0aCI6Ii8zNDk2NDE3Ny8yOTI0NTc3NjEtZTE2OTYxZTUtZjYyZi00NjdmLWE5ZGItMWUyMjc1YTFhNzBhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIyVDA5NTA1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNkY2I3OWRjMzE2ZDUwMzRmYjU5NmUyMmU0ODI1ZWJjZTQyNTMxYjcyNGU0YTU3ZjE4ZTk0N2MyMDQ3MzA0ZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.W_GPgYUeMIVrcq9DY21HcDBVPR22b60LJY5zdQZ79mI"
}];

export default function Projects() {
    return (
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <h2 className='text-center text-white text-2xl p-6'>Projects</h2>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={card.image}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                    </Typography>
                                    <Typography>
                                        {card.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" ><a href={card.link} target="_blank">Website</a></Button>
                                    <Button size="small" ><a href={card.github} target="_blank">Github</a></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
