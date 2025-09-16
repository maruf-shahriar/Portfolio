import React from 'react';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Machine Learning Approaches in Web Application Security',
      journal: 'International Journal of Computer Science & Information Technology',
      year: '2024',
      authors: ['Maruf Shahriar', 'Dr. John Doe', 'Jane Smith'],
      abstract: 'This paper explores the application of machine learning techniques in enhancing web application security, focusing on automated threat detection and prevention mechanisms.',
      url: 'https://example.com/publication1',
      status: 'Published'
    },
    {
      title: 'Optimizing Database Performance in Large-Scale Web Applications',
      conference: 'IEEE International Conference on Software Engineering',
      year: '2023',
      authors: ['Maruf Shahriar', 'Prof. Alice Johnson'],
      abstract: 'A comprehensive study on database optimization techniques for high-traffic web applications, presenting novel indexing strategies and query optimization methods.',
      url: 'https://example.com/publication2',
      status: 'Accepted'
    },
    {
      title: 'Microservices Architecture Patterns for Scalable Systems',
      journal: 'ACM Computing Surveys',
      year: '2023',
      authors: ['Maruf Shahriar', 'Team Collaborators'],
      abstract: 'An analysis of microservices design patterns and their impact on system scalability, reliability, and maintainability in modern web applications.',
      url: null,
      status: 'Under Review'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-success bg-success/10 border-success/20';
      case 'Accepted': return 'text-accent bg-accent/10 border-accent/20';
      case 'Under Review': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <section id="publications" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Research contributions in software engineering and intelligent systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <div key={index} className="card-professional fade-in-up animate">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground leading-tight">
                          {publication.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2 mt-2 text-muted-foreground">
                          <span className="font-medium">
                            {publication.journal || publication.conference}
                          </span>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{publication.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed ml-13">
                      {publication.abstract}
                    </p>

                    <div className="ml-13">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(publication.status)}`}>
                      {publication.status}
                    </span>
                    {publication.url && (
                      <a 
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                        View Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card-professional fade-in-up animate">
            <h3 className="text-2xl font-semibold mb-4">Research Interests</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Current Focus Areas</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Machine Learning in Software Engineering
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Intelligent Systems & Data Science
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Web Application Security
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Future Directions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Scalable System Architecture
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Performance Optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    Distributed Computing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}