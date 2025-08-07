import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg'; // optional image

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={profile} alt="Profile" className="hero-image" />
        <h1 className="hero-title">Hi, I'm <span className="highlight">Bibek</span></h1>
        <h2 className="hero-subtitle">Web Developer | Creative Thinker | Lifelong Learner</h2>
        <p className="hero-description">
          I design and build modern websites & apps with love for great user experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;
