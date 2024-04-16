// SellCarForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import CSS file

const SellCarForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cars', {
        make,
        model,
        year,
        mileage,
        price
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error adding car for sale');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Sell Your Car</h2>
      <form onSubmit={handleSubmit}>
        <label>Make:</label>
        <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
        <label>Model:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        <label>Year:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        <label>Mileage:</label>
        <input type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SellCarForm;
