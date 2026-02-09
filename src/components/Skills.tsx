import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  years: number;
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
        { name: 'React', years: 6, icon: '⚛️' },
        { name: 'TypeScript', years: 4, icon: '📘' },
        { name: 'JavaScript', years: 6, icon: '🟨' },
        { name: 'HTML/CSS', years: 6, icon: '🎨' },
        { name: 'Next.js', years: 4, icon: '⚡' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', years: 6, icon: '🟢' },
        { name: 'Python', years: 8, icon: '🐍' },
        { name: 'PostgreSQL', years: 8, icon: '🐘' },
        { name: 'REST APIs', years: 4, icon: '🔗' },
        { name: 'Java', years: 8, icon: '🟢' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', years: 5, icon: '📝' },
        { name: 'Docker', years: 2, icon: '🐳' },
        { name: 'Figma', years: 2, icon: '🎨' },
        { name: 'ESRI/GIS', years: 4, icon: '🌍' },
        { name: 'Jenkins', years: 1, icon: '🔄' },
        { name: 'Electron', years: 2, icon: '📱' },
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
                {category.skills.map((skill, skillIndex) => {
                  const yearsText = skill.years === 1 ? '1 year' : `${skill.years} years`;
                  
                  return (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{yearsText}</span>
                      </div>
                    </div>
                  );
                })}
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
