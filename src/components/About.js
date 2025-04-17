import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I have completed my BSc in Computer Science from MITACSC College, Alandi, Pune. I’m passionate about front-end development and enjoy building clean and user-friendly websites.</p>
        
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

        <h3>Education</h3>
        <table className="education-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Qualification</th>
              <th>Institute</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>BSc Computer Science</td>
              <td>MIT ACSC College, Alandi, Pune</td>
              <td>8.53 CGPA</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>HSC</td>
              <td>Shri Bhairavnath Vidyalaya, Bhosari, Pune</td>
              <td>79.16%</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>SSC</td>
              <td>Shree Nageshwar Vidyalaya, Moshi, Pune</td>
              <td>76%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default About;
