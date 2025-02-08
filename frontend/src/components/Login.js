import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tech-world-bhtl.onrender.com/api/auth/login', formData);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify({ username: response.data.username }));
      window.location = '/'; // Redirect to Home page after successful login
    } catch (error) {
      console.error(error);
      alert('Invalid login credentials');
    }
  };

  return (
    
    <div className="login-container">
      <h2>Welcome Back 👋</h2>
      <p>Please enter your credentials to log in.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="actions">
          <button type="submit" className="login-btn">Log In</button>
        </div>
      </form>
  </div>
);
};

export default Login;
