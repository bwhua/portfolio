import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const titles = [
    'Full Stack Developer',
    'Web Developer',
    'UI/UX Designer',
    'Python Developer',
    'API Developer',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
		<section id='hero' className='hero'>
			<div className='container'>
				<div className='hero-content'>
					<div className='hero-text'>
						<h1 className='hero-title'>
							Hi, I'm <span className='highlight'>Brandon Hua</span>
						</h1>
						<div className='hero-subtitle'>
							I'm a{' '}
							<div className='titles-container'>
								{titles.map((title, index) => (
									<span key={index} className='title-badge'>
										{title}
									</span>
								))}
							</div>
						</div>
						<p className='hero-description'>
							Passionate about creating beautiful, functional, and user-friendly web applications. I
							love turning ideas into reality through code and design.
						</p>
						<div className='hero-buttons'>
							<button className='btn btn-primary' onClick={() => scrollToSection('projects')}>
								View My Work
							</button>
							<button className='btn btn-secondary' onClick={() => scrollToSection('contact')}>
								Get In Touch
							</button>
							<button
								className='btn btn-resume'
								onClick={() => window.open('./Brandon_Hua_Resume.pdf', '_blank')}>
								Download Resume
							</button>
						</div>
					</div>

					<div className='hero-image'>
						<div className='hero-avatar'>
							<img
								src='./portrait.jpg'
								alt='Brandon Hua'
								className='profile-image'
								onError={(e) => {
									const target = e.target as HTMLImageElement
									target.style.display = 'none'
									target.nextElementSibling?.classList.remove('fallback-hidden')
								}}
							/>
							<div className='avatar-placeholder fallback-hidden'>
								<span>👨‍💻</span>
							</div>
						</div>
						<div className='floating-elements'>
							<div className='floating-element element-1'>⚛️</div>
							<div className='floating-element element-2'>🚀</div>
							<div className='floating-element element-3'>💻</div>
							<div className='floating-element element-4'>🎨</div>
						</div>
					</div>
				</div>

				<div className='scroll-indicator'>
					<div className='scroll-arrow'></div>
					<span>Scroll to explore</span>
				</div>
			</div>
		</section>
	)
};

export default Hero;
