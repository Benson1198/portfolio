// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className='bg-fixed bg-cover bg-no-repeat bg-gradient-to-r from-[#150832] to-[#5e0952]'>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: '3' }}>
          <Toolbar>
            <Typography variant="h5" component={Link} to="/" sx={{
              marginLeft: '40px',
              textDecoration: 'none', color: 'white', "&:hover": {
                color: "#000000",
                textDecoration: "underline #000000"
              }
            }}>
              Home
            </Typography>
            <Typography variant="h5" component={Link} to="/resume" sx={{
              marginLeft: '40px', textDecoration: 'none', color: 'white', "&:hover": {
                color: "#000000",
                textDecoration: "underline #000000"
              }
            }}>
              Resume
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          {/* Render other components outside of Routes */}
          {/* <NavBar /> */}
        </Container>
      </div>
    </Router>
  );
};

export default App;
