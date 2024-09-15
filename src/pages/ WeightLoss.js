import React from 'react';
import './Services.css'; // Custom styles for services

const WeightLoss = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Weight Loss Program</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="path/to/weight-loss-image.jpg" className="card-img-top" alt="Weight Loss" />
            <div className="card-body">
              <h5 className="card-title">Personalized Diet Plans</h5>
              <p className="card-text">Get a diet plan tailored to your needs for effective weight loss.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        {/* Add more cards here if needed */}
      </div>
    </div>
  );
};

export default WeightLoss;
