// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col items-center justify-center bg-fixed bg-cover bg-no-repeat bg-gradient-to-r from-indigo-500 to-[#A2A2D0]'>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
