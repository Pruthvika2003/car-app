import React from 'react';
import './App.css';
import CarCard from './CarCard';

function App() {
  const cars = [
    { id: 1, name: 'Tesla Model S', speed: '200 mph' },
    { id: 2, name: 'BMW M3', speed: '180 mph' },
    { id: 3, name: 'Audi R8', speed: '205 mph' },
  ];

  return (
    <div className="App">
      <h1>Car Showcase</h1>
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.id} name={car.name} speed={car.speed} />
        ))}
      </div>
    </div>
  );
}

export default App;
