import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Car Rental Service',
    description: 'A modern car rental application with booking and payment integration.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Car%20Rental%20Serivce',
  },
  {
    title: 'Grocery Store Management System',
    description: 'Inventory and sales management system for grocery stores.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/GroceryStoreManagementSystem',
  },
  {
    title: 'Library Management System',
    description: 'Manage book inventory, borrowing, and member records.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/LibraryManagementSystem',
  },
  {
    title: 'MotoSafaa Waste Management',
    description: 'Smart waste collection and management solution.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/MotoSafaaWasteManagement',
  },
  {
    title: 'Neura Bank UI',
    description: 'Futuristic user interface concept for digital banking.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Neura%20Bank%20UI',
  },
  {
    title: 'Print Order Service',
    description: 'Online print order and delivery management system.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Print%20Order%20Serivce/Print%20Order%20Serivce',
  },
  {
    title: 'Student Management System',
    description: 'A complete system to manage student data and academic records.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Student_Management_System_AP',
  },
  {
    title: 'Time Series Price Vegetables and Fruits',
    description: 'Data analysis of market prices using time series models.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Time%20Series%20Price%20Vegetables%20and%20Fruits',
  },
  {
    title: 'Zoo Management System',
    description: 'System to manage animals, visitors, and staff in a zoo.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Zoo%20Management%20System',
  },
  {
    title: 'Group OOP Assignment',
    description: 'OOP-based project demonstrating group development skills.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/group-assignment-oop',
  },
  {
    title: 'POS System',
    description: 'Point of Sale system for handling retail operations.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/pos',
  },
  {
    title: 'Individual Assignment 1',
    description: 'Assignment focusing on basic software implementation concepts.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Individual%20Assignment1',
  },
  {
    title: 'Individual Assignment 2',
    description: 'Follow-up to Assignment 1 with more advanced features.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Individual%20Assignment2',
  },
  {
    title: 'High Fidelity HCI Project',
    description: 'UI/UX prototype design demonstrating HCI principles.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/Final%20High%20Fidelity%20HCI%20project',
  },
  {
    title: 'MLPC Assignment',
    description: 'Machine learning pipeline project demonstrating classification.',
    link: 'https://github.com/bibekkhadka1/Projects/tree/main/0363649_BibekKhadka_MLPC/0363649_BibekKhadka',
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, link }, idx) => (
          <div key={idx} className="project-card">
            <div className="card-content">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
                aria-label={`View ${title} on GitHub`}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
