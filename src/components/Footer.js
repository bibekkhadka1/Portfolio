import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Bibek Khadka</h3>
        <p className="footer-tagline">Building cool things with code ✨</p>

        <div className="social-icons">
          <a
            href="https://github.com/bibekkhadka1/Projects"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bibek-khadka25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-rights">© 2025 Bibek Khadka. All rights reserved.</p>

        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
