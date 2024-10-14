import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust if you have a Navbar component
import CoworkingSpaces from './CoworkingSpaces'; // Adjust if you have this component
import VisaInfo from './VisaInfo'; // Adjust if you have this component
import Communities from './Communities'; // Adjust if you have this component

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
