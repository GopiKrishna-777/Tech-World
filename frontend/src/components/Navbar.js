import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("authToken") ? true : false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      setUser(userInfo);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(false);
    navigate("/auth");  // Redirect to login/signup page
  };

  return (
  <nav className="navbar">
    <h1 className="logo">Tech World</h1>
    
    <div className="nav-buttons">
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <button className="login-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth">
            <button className="login-button">Log In</button>
          </Link>
        )}
      </div>

    <div className="nav-links">
      <a href="/" className="nav-link">Home</a>
      <a href="/about" className="nav-link">About</a>
      <a href="/contact" className="nav-link">Contact</a>
    </div>
  </nav>
);
};

export default Navbar;
