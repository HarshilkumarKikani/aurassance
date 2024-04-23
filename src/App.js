import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import Contact from './Contact';
import HomePage from './HomePage';
import Services from './Services';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap Routes around Route components */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use "element" prop instead of "component" */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
