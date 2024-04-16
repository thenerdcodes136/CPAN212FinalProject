// Listings.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import CSS file

const Listings = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Car Listings</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <Link to={`/listings/${car._id}`}>{car.make} {car.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;