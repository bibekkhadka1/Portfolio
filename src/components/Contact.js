import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);    // to differentiate success/error status
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      setIsError(true);
      return;
    }

    setLoading(true);
    setStatus('');
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' }); // reset form on success
      } else {
        setStatus(data.error || 'Failed to send message. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      setStatus('Failed to send message. Please check your internet connection.');
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact" aria-busy={loading}>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your full name" 
            required 
            disabled={loading}
            autoComplete="name"
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your email address" 
            required 
            disabled={loading}
            autoComplete="email"
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Write your message here..." 
            required
            disabled={loading}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className={`form-status ${isError ? 'error' : 'success'}`} role="alert">
              {status}
            </p>
          )}
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><FaEnvelope className="icon" /> kbibek300@gmail.com</p>
          <p>
            <FaLinkedin className="icon" /> 
            <a href="https://www.linkedin.com/in/bibek-khadka25" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/bibek-khadka25
            </a>
          </p>
          <p>
            <FaGithub className="icon" /> 
            <a href="https://github.com/bibekkhadka1/Projects" target="_blank" rel="noopener noreferrer">
              github.com/bibekkhadka1
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
