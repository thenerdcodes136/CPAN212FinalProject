// server/index.js

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose
const User = require('./db/userModel'); // Import User model
const Car = require('./db/carModel'); // Import Car model
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/cartrader')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route for user registration
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Create new user and save to database
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Route for adding a new car
app.post('/api/cars', async (req, res) => {
  try {
    const { make, model, year, mileage, price } = req.body;
    console.log('Received car details:', make, model, year, mileage, price); // Log received car details
    const newCar = new Car({ make, model, year, mileage, price });
    console.log('New car object:', newCar); // Log newly created car object
    await newCar.save();
    console.log('Car saved successfully'); // Log success message
    res.status(201).json({ success: true, message: 'Car added successfully', car: newCar });
  } catch (error) {
    console.error('Error adding car:', error); // Log error message
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});