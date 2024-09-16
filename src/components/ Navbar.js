import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Create this CSS file for custom styles
import logo from '/Users/sandykhot/Desktop/gym/gym-website/src/assets/fitness.png'; // Import the new logo 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Vighnesh Fitness Logo" className="logo" /> {/* Updated logo */}
        Vighnesh Fitness
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/weight-loss">Weight Loss</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weight-gain">Weight Gain</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/diet-plan">Diet Plan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
