import React, { useState } from 'react';
import axios from 'axios';

const DietPlan = () => {
  const [formData, setFormData] = useState({ weight: '', height: '', gender: '', preference: '' });
  const [dietPlan, setDietPlan] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/diet-plan', formData);
      setDietPlan(response.data);
    } catch (error) {
      console.error('Error fetching diet plan', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Get Your Diet Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Height (m)</label>
          <input type="number" name="height" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" className="form-control" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Food Preference</label>
          <select name="preference" className="form-control" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Get Diet Plan</button>
      </form>

      {dietPlan && (
        <div className="mt-4">
          <h3>Your Diet Plan</h3>
          <p>{dietPlan}</p>
        </div>
      )}
    </div>
  );
};

export default DietPlan;
