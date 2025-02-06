import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css'
import Auth from './pages/Auth';

const About = () => (
  <div className="page-container">
    <div className="content">
      <h2>About This Project</h2>
      <p>
        This is a sample MERN stack application developed to showcase my skills in full-stack development.
        The app features the ability to browse and view products, view detailed product information, and authenticate users.
      </p>
      <p>
        Technologies used:
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </p>
      <p>
        The goal of this project is to demonstrate proficiency in both frontend and backend development, with a focus on building
        scalable and efficient web applications. It includes basic authentication functionality and responsive UI.
      </p>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <div className="content">
      <h2>Contact Me</h2>
      <p>
        Thank you for visiting my portfolio! If you would like to collaborate on a project, ask any questions, or discuss a potential opportunity, please feel free to reach out.
      </p>

      <h3>Here’s how you can get in touch:</h3>

      <ul>
        <li>
          <strong>Email:</strong> 
          <a href="mailto:your.email@example.com">gopikrishna0393633@gmail.com</a>
          <p>If you're looking to discuss a project or collaboration, feel free to drop me an email. I respond within 24 hours.</p>
        </li>
        <li>
          <strong>GitHub:</strong> 
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/GopiKrishna</a>
          <p>Check out my repositories where I contribute to various open-source projects and develop my own applications. You’ll find detailed documentation on the projects.</p>
        </li>
        <li>
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">linkedin.com/in/GopiKrishna</a>
          <p>Feel free to connect with me on LinkedIn. I regularly post about tech trends, MERN stack tutorials, and development best practices.</p>
        </li>
      </ul>

      <h3>Social Media:</h3>
      <p>If you prefer to communicate through social media, I'm active on various platforms:</p>
      <ul>
        <li>GitHub: Share and explore code with fellow developers.</li>
        <li>LinkedIn: Professional networking and knowledge sharing.</li>
      </ul>

      <p>I look forward to connecting with you!</p>
    </div>
  </div>
);


const App = () =>{ 
  return(
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
);
};

export default App;