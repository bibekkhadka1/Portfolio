import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor in Computer Science (BCS)',
    institution: 'Institute of International Management Science (IIMS)',
    duration: '2023 – ONGOING',
    description: 'Pursuing a comprehensive curriculum focusing on software development, algorithms, and system design.',
  },
  {
    degree: 'High School (+2)',
    institution: 'Trinity International Secondary School/ College',
    duration: '2020 – 2022',
    description: 'Graduated with Academic GPA: 3.71',
  },
  {
    degree: 'School (SEE)',
    institution: 'KMC School',
    duration: '2019',
    description: 'Graduated with Academic GPA: 3.90',
  },
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map(({ degree, institution, duration, description }, index) => (
          <div key={index} className="education-card">
            <div className="education-marker" />
            <div className="education-content">
              <h3 className="degree">{degree}</h3>
              <span className="institution">{institution}</span>
              <span className="duration">{duration}</span>
              <p className="description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
