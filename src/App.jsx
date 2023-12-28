// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Resume from './components/Resume';
import Home from './components/Home';
import "./App.css"
import Particle from './components/Particle';

const App = () => {
  return (
    <Router>
      <div className='body'>
        <Particle />
        <AppBar position="static" style={{ background: 'transparent', boxShadow: '3' }}>
          <Toolbar>
            <Typography variant="h5" component={Link} to="/" sx={{
              transition: 'text-decoration-color 0.5s',
              marginLeft: '40px',
              textDecoration: 'underline inherit', color: 'white', "&:hover": {
                textDecoration: "underline white"
              }
            }}>
              Home
            </Typography>
            <Typography variant="h5" component={Link} to="/resume" sx={{
              transition: 'text-decoration-color 0.5s',
              marginLeft: '40px',
              textDecoration: 'underline inherit', color: 'white', "&:hover": {
                textDecoration: "underline white"
              }
            }}>
              Resume
            </Typography>
          </Toolbar>
        </AppBar>

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          {/* Render other components outside of Routes */}
        </Container>
      </div>
    </Router>
  );
};

export default App;


// marginX: '20px',
// color: white,
// textDecoration: 'underline 1px rgba(255, 255, 255, 0)',
// transition: 'text-decoration-color 0.3s',
// '&:hover': {
//   textDecorationColor: 'rgba(255, 255, 255, 1)',
// },