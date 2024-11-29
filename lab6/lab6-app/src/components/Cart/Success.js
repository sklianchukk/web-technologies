import React from 'react';
import './Success.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-icon">✔</div>
      <h1 className="success-message">Order Placed Successfully!</h1>
      <p className="success-subtitle">Thank you for your purchase. Your order is being processed.</p>
      <button
        className="success-button"
        onClick={() => window.location.href = '/catalog'}
      >
        Continue shopping!
      </button>
    </div>
  );
};

export default SuccessPage;
