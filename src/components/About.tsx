import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better and understand my journey in the world of web development
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience creating 
                innovative web applications. I specialize in modern JavaScript frameworks, 
                responsive design, and scalable backend solutions.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a deep passion 
                for building products that make a difference. I believe in writing clean, 
                maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </div>
            
            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I develop full-stack web applications using modern technologies like React, 
                Node.js, and TypeScript. From concept to deployment, I handle every aspect 
                of the development process.
              </p>
              <p>
                My expertise includes frontend development, backend API design, database 
                management, and cloud deployment. I'm always learning and staying up-to-date 
                with the latest industry trends and best practices.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-features">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h4>Problem Solver</h4>
            <p>I approach challenges with analytical thinking and creative solutions</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h4>Fast Learner</h4>
            <p>Quick to adapt to new technologies and frameworks</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <h4>Team Player</h4>
            <p>Excellent communication and collaboration skills</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <h4>Results Driven</h4>
            <p>Focused on delivering high-quality, scalable solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
