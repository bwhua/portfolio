import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Brandon Hua</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating amazing web experiences.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/bwhua" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/bwhua/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                💼
              </a>

              <a href="mailto:john.doe@example.com" aria-label="Email">
                📧
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Brandon Hua. All rights reserved.</p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
