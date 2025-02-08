import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';
import './signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tech-world-bhtl.onrender.com/api/auth/signup', formData);
      alert('Signup successful, please log in');
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || "Something went wrong"}`);
      }
  };

  return (
    <div className="signup-container">
    <h2>Create an Account</h2>
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="input-group">
        <FaUser className="icon" />
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      </div>

      <div className="input-group">
        <FaEnvelope className="icon" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      </div>

      <div className="input-group">
        <FaLock className="icon" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      </div>

      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  </div>
  );
};

export default Signup;
