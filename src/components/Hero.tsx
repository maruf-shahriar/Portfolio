import React from 'react';
import { Download, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // This would link to the actual resume file
    window.open('#', '_blank');
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up animate">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">Maruf Shahriar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Software Engineer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Building scalable web applications with Laravel, Go, and React.js. 
                Passionate about intelligent systems and data science.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleResumeDownload}
                className="btn-hero flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-outline flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center fade-in-up animate">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/20">
              <div className="w-72 h-72 bg-surface rounded-full flex items-center justify-center shadow-lg">
                <div className="text-6xl font-bold text-primary">MS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}