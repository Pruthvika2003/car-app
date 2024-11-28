import React from 'react';
import './CarCard.css';

function CarCard({ name, speed }) {
  return (
    <div className="car-card">
      <h2>{name}</h2>
      <p>Top Speed: {speed}</p>
    </div>
  );
}

export default CarCard;
