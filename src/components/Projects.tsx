import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  category: 'all' | 'frontend' | 'fullstack' | 'mobile';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'fullstack' >('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Murder Mystery Board',
      description: 'An interactive murder mystery cork board with red wire connections. Create suspects, add testimonials, connect people, and build a timeline of events.',
      image: '🕵️',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'HTML'],
      liveUrl: 'https://murder-mystery-drab.vercel.app/',
      githubUrl: 'https://github.com/bwhua/murder-mystery',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A portfolio website to showcase my projects and skills',
      image: '🌐',
      technologies: ['React', 'CSS', 'HTML'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bwhua/portfolio',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'DND Character Cheat Sheet Creator',
      description: 'A web app that allows users to create a character cheat sheet for their DND character in seconds',
      image: '🗡️',
      technologies: ['React', 'Python', 'Flask'],
      githubUrl: 'https://github.com/bwhua/DnD-Character-Creator',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Seven Deadly Sins PVP Randomizer v2',
      description: 'Version 2 of the Seven Deadly Sins PVP Randomizer as a web app and a more intuitive UI',
      image: '🎲',
      technologies: ['React', 'JSON', 'CSS'],
      liveUrl: 'https://bwhua.github.io/SDSGC-Randomizer/#/',
      githubUrl: 'https://github.com/bwhua/SDSGC-Randomizer',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Seven Deadly Sins PVP Randomizer',
      description: 'A downloadable app that allows users to create a random team of characters given a filter of characters.',
      image: '🎲',
      technologies: ['React', 'JSON', 'Electron', 'CSS'],
      githubUrl: 'https://github.com/bwhua/SDSGC_PVP',
      category: 'frontend'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
        
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key as any)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <button className="btn btn-primary" disabled>
                      Live Demo
                    </button>
                  )}
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Interested in working together? Let's discuss your project!</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
