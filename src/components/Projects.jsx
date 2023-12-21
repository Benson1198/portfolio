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
    github: "",
    image: ""
},

{
    title: "DALL - E",
    desc: "An AI Image generation website, with community sharing feature",
    link: "https://gentle-swan-c1b2b7.netlify.app/",
    github: "",
    image: ""
},
{
    title: "E-COMMERCE WEBSITE",
    desc: "A fully functional E -Commerce website with user and guest checkout capabilities",
    link: "https://github.com/Benson1198/Ecommerce-django",
    github: "",
    image: ""
}];

export default function Projects() {
    return (
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <h2 className='text-center text-2xl p-6'>Projects</h2>
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
                                    image="https://source.unsplash.com/random?wallpapers"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Website</Button>
                                    <Button size="small">Github</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
