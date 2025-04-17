import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2> {/* Title at the top, centered */}
      <div className="projects-content">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built using HTML, CSS, JavaScript, and React to showcase my skills and projects.</p>
          <a href="https://github.com/your-username/portfolio-project" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>A weather forecasting app using JavaScript, React, and a weather API to show current weather based on location.</p>
          <a href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>

        <div className="project-card">
          <h3>To-Do App</h3>
          <p>A simple task management app built using React where users can add, delete, and manage notes and tasks.</p>
          <a href="https://github.com/your-username/todo-app" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
