import React from 'react';
import './Footer.css'; // Custom styles for footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@gymzone.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6 text-right">
            <h5>Follow Us</h5>
            <i className="fab fa-facebook fa-2x mx-2"></i>
            <i className="fab fa-instagram fa-2x mx-2"></i>
            <i className="fab fa-twitter fa-2x mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
