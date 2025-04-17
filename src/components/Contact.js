import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you’d like to get in touch, feel free to reach out!</p>
        <div className="contact-details">
          <p>Email: <a href="mailto:ajaygokhale123@gmail.com">ajaygokhale123@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-link</a></p>
          <p>GitHub: <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">github.com/your-github</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
