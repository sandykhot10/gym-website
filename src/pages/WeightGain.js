import React from 'react';
import './WeightGain.css'; // Import the CSS file for styling
import weightGainImage from '/Users/sandykhot/Desktop/gym/gym-website/src/assets/weightgain.jpg'; // Assuming you have an image for weight gain

const WeightGain = () => {
  return (
    <div className="weight-gain-container">
      <div className="weight-gain-card">
        <h2 className="weight-gain-title">Weight Gain</h2>
        <img src={weightGainImage} alt="Weight Gain" className="weight-gain-image" />
        <p className="weight-gain-description">
          Gaining weight can be just as challenging as losing it. Here are some tips to help you gain weight in a healthy way:
        </p>
        <ul className="weight-gain-tips">
          <li>🍽 Eat more frequently and include nutrient-rich foods.</li>
          <li>🥜 Include high-calorie, high-protein snacks like nuts and seeds.</li>
          <li>💪 Incorporate strength training exercises into your routine.</li>
          <li>🥤 Drink smoothies and shakes packed with calories.</li>
          <li>🧀 Add healthy fats like cheese, avocado, and nut butter to your meals.</li>
        </ul>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default WeightGain;
