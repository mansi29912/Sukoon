import React from 'react';
import './SukoonAssistance.css';
import internImage from './intern.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SukoonAssistance = () => {
  const handleContactClick = () => {
    alert('You clicked on Contact Sukoon Team.');
  };

  const handleDetailsClick = () => {
    alert('You clicked on View details.');
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={internImage} alt="Customer Support Illustration" className="girl-image" />
      </div>
      <div className="content-section">
        <h1 className="title">
          <span className="light-bold">Do you need </span>
          <span className="strong-bold">Sukoon Assistance?</span>
        </h1>
        <p className="description">
          We’re here for you! Our team is available for guidance. <strong>Contact +91 6246497245</strong>
        </p>
        <div className="button-group">
          <button className="contact-button" onClick={handleContactClick}>
            Contact Sukoon Team
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
              alt="WhatsApp Icon" 
              className="whatsapp-icon-green" 
            />
          </button>
          <button className="details-button" onClick={handleDetailsClick}>
            View details <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SukoonAssistance;
