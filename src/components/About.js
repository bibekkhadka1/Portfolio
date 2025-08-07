import React from 'react';
import './About.css';
import profile from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={profile} alt="Bibek" className="about-photo" />
          <div className="floating-shape" />
        </div>
        <div className="about-text">
          <h2 className="gradient-text">About Me</h2>
          <p>
            Hi! I'm <strong>Bibek</strong>, a passionate Web Developer who crafts
            stunning, responsive websites using React, JavaScript, and CSS.
          </p>
          <p>
            I love turning ideas into interactive digital experiences that users enjoy.
            When I'm not coding, I’m learning new technologies and pushing creative boundaries.
          </p>
          <a href="/CV.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
