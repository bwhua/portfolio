import React from 'react';
import './Experience.css';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'One Water Solutions Institute - Colorado State University',
      position: 'Web Developer',
      duration: 'Oct 2021 - June 2025',
      description: 'Developed Web Solutions for government bodies to perform research on water and to streamline existing processes.',
      technologies: ['React', 'TypeScript', 'ESRI/GIS', 'Python', 'Jenkins', 'Java', 'Docker', 'Git', 'SQL', 'APIs'],
      achievements: [
        'Lead developer on 10+ web tools.',
        'Built and maintained Restful APIs using Java to serve data to the web tools.',
        'Developed a secure role-based project-sharing and permission system',
        'Developed methods to integrate external datasets such as USGS and Census data into our web tools'
      ]
    },
    {
      id: 2,
      company: 'Information Technology - Colorado State University',
      position: 'Cybersecurity Intern',
      duration: 'Dec 2018 - May 2021',
      description: 'Worked as a team member, and then Team Lead of the end-point security team analyzing and educating the community on security best practices. ',
      technologies: ['Python', 'Electron', 'Bash', '2FA'],
      achievements: [
        'Created an Electron app to provide users one location to see their device\'s security posture', 
        'Created A Whitepaper on the importance of 2FA and the implications of using (Yubikey) for CSU employees',
        'Designed online courses to educate the community on security best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and the companies I've had the pleasure to work with
        </p>
        
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={experience.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company-name">{experience.company}</h3>
                  <span className="position">{experience.position}</span>
                  <span className="duration">{experience.duration}</span>
                </div>
                
                <p className="experience-description">{experience.description}</p>
                
                <div className="technologies-used">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
