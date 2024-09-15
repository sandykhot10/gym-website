import React, { useState } from 'react';
import './DietPlan.css';

const DietPlan = () => {
  const [gender, setGender] = useState('male');
  const [dietType, setDietType] = useState('nonveg');
  const [goal, setGoal] = useState('weight loss');

  const getDietPlan = () => {
    if (goal === 'weight loss') {
      if (dietType === 'veg') {
        return {
          breakfast: ['🍓 Oatmeal with fruits', '🍵 1 cup of green tea', '🥚 Tofu scramble'],
          lunch: ['🥗 Chickpea salad', '🍚 Quinoa', '🥦 Steamed vegetables'],
          snack: ['🥜 Mixed nuts', '🍓 Vegan yogurt with berries'],
          dinner: ['🍲 Grilled tofu', '🍚 Brown rice', '🥗 Green salad'],
        };
      } else {
        return {
          breakfast: ['🍓 Oatmeal with fruits', '🍵 1 cup of green tea', '🥚 Boiled eggs'],
          lunch: ['🍗 Grilled chicken salad', '🍚 Quinoa', '🥦 Steamed vegetables'],
          snack: ['🥜 Mixed nuts', '🍓 Yogurt with berries'],
          dinner: ['🐟 Grilled salmon', '🍚 Brown rice', '🥗 Green salad'],
        };
      }
    } else if (goal === 'weight gain') {
      if (dietType === 'veg') {
        return {
          breakfast: ['🥤 Smoothie with nuts and seeds', '🍞 Whole wheat toast with avocado', '🍶 Greek yogurt'],
          lunch: ['🍛 Paneer curry', '🍚 Brown rice', '🥦 Mixed vegetables'],
          snack: ['🥙 Hummus with whole grain crackers', '🥤 Fruit smoothie'],
          dinner: ['🍲 Chickpea stew', '🍚 Quinoa', '🥗 Grilled vegetables'],
        };
      } else {
        return {
          breakfast: ['🥤 Smoothie with protein powder', '🍞 Whole wheat toast with avocado', '🍶 Greek yogurt'],
          lunch: ['🍗 Grilled chicken', '🍚 Brown rice', '🥦 Steamed vegetables'],
          snack: ['🥙 Hummus with whole grain crackers', '🥤 Fruit smoothie'],
          dinner: ['🥩 Grilled steak', '🍚 Quinoa', '🥗 Green salad'],
        };
      }
    }
  };

  const dietPlan = getDietPlan();

  return (
    <div className="diet-plan-container">
      <h1 className="diet-plan-title">Your Diet Plan</h1>
      <div className="diet-plan-form">
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Diet Type:
          <select value={dietType} onChange={(e) => setDietType(e.target.value)}>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </label>
        <label>
          Goal:
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="weight loss">Weight Loss</option>
            <option value="weight gain">Weight Gain</option>
          </select>
        </label>
      </div>

      <div className="diet-plan-grid">
        <div className="meal-card">
          <h3 data-icon="🍳">Breakfast</h3>
          <ul className="food-list">
            {dietPlan.breakfast.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="meal-card">
          <h3 data-icon="🍽">Lunch</h3>
          <ul className="food-list">
            {dietPlan.lunch.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="meal-card">
          <h3 data-icon="🍎">Snack</h3>
          <ul className="food-list">
            {dietPlan.snack.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="meal-card">
          <h3 data-icon="🍽">Dinner</h3>
          <ul className="food-list">
            {dietPlan.dinner.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DietPlan;
