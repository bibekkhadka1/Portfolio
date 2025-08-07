import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path='/projects' element ={<Projects />} />
        <Route path='/contact' element ={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
