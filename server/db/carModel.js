// server/db/carModel.js

const mongoose = require('mongoose');

// Define car schema
const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  mileage: { type: Number, required: true },
  price: { type: Number, required: true },
  // Add more fields as needed
});

// Create car model
const Car = mongoose.model('Car', carSchema);

module.exports = Car;