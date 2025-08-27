import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Next.js', level: 85, icon: '⚡' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'REST APIs', level: 90, icon: '🔗' },
        { name: 'Java', level: 80, icon: '🟢' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95, icon: '📝' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'ESRI/GIS', level: 90, icon: '🌍' },
        { name: 'Jenkins', level: 60, icon: '🔄' },
        { name: 'Electron', level: 80, icon: '📱' },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical expertise and the tools I use to bring ideas to life
        </p>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Development Approach</h4>
            <p>
              I follow modern development practices including clean code principles, 
              test-driven development, and continuous integration/deployment.
            </p>
          </div>
          <div className="summary-card">
            <h4>Learning Mindset</h4>
            <p>
              I'm constantly learning new technologies and frameworks to stay current 
              with industry trends and deliver the best solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
