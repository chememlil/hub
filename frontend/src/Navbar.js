// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure this matches the file name
import CoworkingSpaces from './CoworkingSpaces';
import VisaInfo from './VisaInfo';
import Communities from './Communities';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/coworking-spaces" element={<CoworkingSpaces />} />
        <Route path="/visa-info" element={<VisaInfo />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  );
};

export default App;
