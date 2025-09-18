import React from 'react';
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
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

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8 fade-in-up animate">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell me more about your project or inquiry..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-hero w-full flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8 fade-in-up animate">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Prefer direct contact? You can reach me through any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-success" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Github className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={handleResumeDownload}
                  className="btn-outline w-full flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </button>
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