import React from 'react';
import './App.css';

const StartPage = ({ onPageChange }) => {
  const handleStartClick = () => {
    onPageChange('search');
  };

  return (
    <div className="background-image">
      <nav>
        <h2>Dish <span style={{color: "#4CAF50"}}>Discovery</span></h2>
      </nav>
      <h1><b>Welcome to </b><span style={{fontFamily: "Pacifico, cursive", fontSize: "3rem", fontWeight: "bold", color: "#4CAF50", textShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>Dish Discovery</span></h1>
      <div className="about-container">
        <h2>About Us</h2>
        <p>At Dish Discovery, we're passionate about food and the joy it brings to our lives.
           Our mission is to inspire home cooks of all levels to explore new flavors, ingredients, and cooking techniques, and to make cooking easier, more enjoyable, and more accessible to everyone.</p>
      </div>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};

export default StartPage;