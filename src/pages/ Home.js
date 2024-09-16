import React from 'react';
import './Home.css'; // Custom styles for this section

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <h1>Welcome to Fitness Club</h1>
        <p>Your Journey to Fitness Starts Here</p>
        <button className="btn btn-primary btn-lg">Join Now</button>
      </div>
    </div>
  );
};

export default Home;
