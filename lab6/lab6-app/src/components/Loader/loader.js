import React from 'react';
import './loader.css';
import spinner from "../../images/spinner.jpg"

const Loader = () => (
  <div className="loader">
    <img src={spinner} alt="loader" className="loading-image"/>
  </div>
);

export default Loader;
