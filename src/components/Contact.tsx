import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bwhua',
      icon: '🐙',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bwhua/',
      icon: '💼',
      color: '#0077b5'
    },
    {
      name: 'Email',
      url: 'mailto:branhua@gmail.com',
      icon: '📧',
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start a project or just want to chat? I'd love to hear from you!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Arvada, CO</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>branhua@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (303) 656-8204</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-links-container">
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
