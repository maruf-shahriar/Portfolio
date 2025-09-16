import React from 'react';
import { Mail, Linkedin, Github, Download, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = {
    email: 'maruf.ewucse@gmail.com',
    location: 'Dhaka, Bangladesh',
    linkedin: 'https://linkedin.com/in/maruf-shahriar',
    github: 'https://github.com/maruf-shahriar'
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleResumeDownload = () => {
    // This would link to the actual resume file
    window.open('#', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just connecting with fellow developers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 fade-in-up animate">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking to hire, collaborate on a project, or just want to 
                  say hello, I'd love to hear from you. Feel free to reach out through any 
                  of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Find me online</h4>
                <div className="flex gap-4">
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form / CTA */}
            <div className="space-y-8 fade-in-up animate">
              <div className="card-professional">
                <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Start a Conversation?</h3>
                
                <div className="space-y-6 text-center">
                  <p className="text-muted-foreground">
                    I'm currently open to new opportunities and exciting projects. 
                    Let's discuss how we can work together.
                  </p>

                  <div className="space-y-4">
                    <button 
                      onClick={handleEmailClick}
                      className="btn-hero w-full flex items-center justify-center gap-2"
                    >
                      <Mail size={20} />
                      Send me an email
                    </button>
                    
                    <button 
                      onClick={handleResumeDownload}
                      className="btn-outline w-full flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-card border border-border rounded-lg">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card border border-border rounded-lg">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}