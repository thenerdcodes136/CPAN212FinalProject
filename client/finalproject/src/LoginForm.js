// LoginForm.js
import React, { useState } from 'react';
import './styles.css'; // Import CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        {/* Login form fields */}
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <label htmlFor="register-username">Username:</label>
        <input type="text" id="register-username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        <label htmlFor="register-password">Password:</label>
        <input type="password" id="register-password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Register</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default LoginForm;