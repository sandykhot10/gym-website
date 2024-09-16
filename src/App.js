import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/Users/sandykhot/Desktop/gym/gym-website/src/components/ Navbar.js';
import Home from '/Users/sandykhot/Desktop/gym/gym-website/src/pages/ Home.js';
import WeightLoss from '/Users/sandykhot/Desktop/gym/gym-website/src/pages/ WeightLoss.js';
import WeightGain from './pages/WeightGain';
import DietPlan from './pages/DietPlan';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight-loss" element={<WeightLoss />} />
        <Route path="/weight-gain" element={<WeightGain />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
};

export default App;
