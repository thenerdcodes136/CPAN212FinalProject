// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import CarDetails from './CarDetails';
import Listings from './CarListings';
import SellCarForm from './SellCarForm';
import LoginForm from './LoginForm';
import './styles.css'; // Import CSS file

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/sell-car" element={<SellCarForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;