import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experience = {
    company: 'EasyBilling Software Company',
    position: 'Jr. Software Engineer',
    duration: '2025 - Present',
    location: 'Dhaka, Bangladesh',
    description: [
      'Developed and maintained web applications using Laravel and React.js',
      'Implemented RESTful APIs and database solutions with MySQL',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Participated in code reviews and maintained clean, scalable code architecture',
      'Contributed to system optimization and performance improvements',
    ],
    technologies: ['Laravel', 'React.js', 'MySQL', 'PHP', 'JavaScript']
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-professional fade-in-up animate">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-primary" size={32} />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{experience.position}</h3>
                  <h4 className="text-xl font-semibold text-foreground">{experience.company}</h4>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-lg">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-lg">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}