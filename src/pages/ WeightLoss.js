import React from 'react';
import './WeightLoss.css';
import gymImage from '/Users/sandykhot/Desktop/gym/gym-website/src/assets/weightloss.jpg';

const WeightLoss = () => {
  return (
    <div className="weight-loss-container">
      <div className="weight-loss-card">
        <h2 className="weight-loss-title">Weight Loss</h2>
        <img
          src={gymImage}
          alt="Healthy Lifestyle"
          className="weight-loss-image"
        />
        <p className="weight-loss-description">
          Discover effective tips and plans to help you on your weight loss journey. Maintain a balanced diet and a healthy lifestyle.
        </p>
        <ul className="weight-loss-tips">
          <li>🍏 Eat balanced meals with plenty of vegetables.</li>
          <li>🚶‍♂️ Incorporate regular physical activity.</li>
          <li>💧 Stay hydrated throughout the day.</li>
          <li>🥦 Focus on whole foods over processed foods.</li>
        </ul>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default WeightLoss;
