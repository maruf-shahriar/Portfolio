import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Laravel backend and React.js frontend, featuring user authentication, product management, and payment integration.',
      technologies: ['Laravel', 'React.js', 'MySQL', 'Stripe API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'A comprehensive analytics dashboard using Go for backend services and React.js for visualization, processing large datasets for business insights.',
      technologies: ['Go', 'React.js', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, built using Laravel and modern web technologies.',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'WebSocket'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'API Gateway Service',
      description: 'A microservices API gateway built with Go, handling authentication, rate limiting, and request routing for distributed systems.',
      technologies: ['Go', 'Redis', 'Docker', 'Kubernetes'],
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-semibold fade-in-up animate">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card-professional fade-in-up animate">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Code2 className="text-primary" size={20} />
                      </div>
                      <h4 className="text-xl font-semibold">{project.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link w-8 h-8"
                      >
                        <Github size={16} />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="social-link w-8 h-8"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold fade-in-up animate">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 fade-in-up animate">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
