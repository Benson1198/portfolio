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
    link: "https://shiny-squirrel-4168dc.netlify.app/",
    github: "https://github.com/Benson1198/AI-Summarizer",
    image: "/assets/ai_summarizer.png"
},

{
    title: "DALL - E",
    desc: "An AI Image generation website, with community sharing feature",
    link: "https://gentle-swan-c1b2b7.netlify.app/",
    github: "https://github.com/Benson1198/Dall-e",
    image: "/assets/dall_e.png"
},
{
    title: "E-COMMERCE WEBSITE",
    desc: "A fully functional E -Commerce website with user and guest checkout capabilities",
    link: "https://github.com/Benson1198/Ecommerce-django",
    github: "https://github.com/Benson1198/Ecommerce-django",
    image: "/assets/e_comm.png"
}];

export default function Projects() {
    return (
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <h2 className='text-center text-white text-5xl p-6 font-mono'>PROJECTS</h2>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'grey.100' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                        border: 5,
                                        borderColor: 'grey.100'
                                    }}
                                    image={card.image}
                                    alt="Website Snapshot"
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
