import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

export default function Education() {
  const education = {
    university: 'East West University',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    specialization: 'Intelligent Systems & Data Science',
    duration: '2020 - 2024',
    location: 'Dhaka, Bangladesh',
    gpa: '3.75/4.00',
    status: 'Graduated',
    description: 'Comprehensive study in computer science with specialized focus on intelligent systems, machine learning, and data science applications.',
  };

  const coursework = [
    {
      category: 'Core Computer Science',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems'
      ]
    },
    {
      category: 'Intelligent Systems',
      courses: [
        'Machine Learning',
        'Artificial Intelligence',
        'Neural Networks & Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Pattern Recognition'
      ]
    },
    {
      category: 'Data Science',
      courses: [
        'Statistics & Probability',
        'Data Mining',
        'Big Data Analytics',
        'Statistical Computing',
        'Research Methodology',
        'Data Visualization'
      ]
    },
    {
      category: 'Software Development',
      courses: [
        'Web Development',
        'Mobile Application Development',
        'Software Architecture',
        'System Analysis & Design',
        'Human-Computer Interaction',
        'Project Management'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Achieved Dean\'s List recognition for academic excellence',
      year: '2022, 2023'
    },
    {
      title: 'Research Publication',
      description: 'Published research paper in machine learning applications',
      year: '2024'
    },
    {
      title: 'Programming Contest',
      description: 'Participated in multiple programming contests and hackathons',
      year: '2021-2023'
    },
    {
      title: 'Final Year Project',
      description: 'Developed intelligent web application with ML integration',
      year: '2024'
    }
  ];

  return (
    <section id="education" className="section-padding bg-surface/50">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation in computer science with specialized focus on intelligent systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Education */}
          <div className="card-professional fade-in-up animate">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* University Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{education.degree}</h3>
                    <h4 className="text-xl font-semibold">{education.university}</h4>
                    <p className="text-lg text-accent font-medium">{education.specialization}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} />
                    <span>GPA: {education.gpa}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>{education.status}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Academic Highlights</h4>
                <div className="space-y-3">
                  <div className="text-center p-4 bg-surface rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">3.75</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg border border-border">
                    <div className="text-2xl font-bold text-accent">4</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-4 bg-surface rounded-lg border border-border">
                    <div className="text-2xl font-bold text-success">40+</div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center fade-in-up animate">Relevant Coursework</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coursework.map((category, index) => (
                <div key={index} className="card-professional fade-in-up animate">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-accent" size={20} />
                      </div>
                      <h4 className="font-semibold text-lg">{category.category}</h4>
                    </div>
                    <div className="grid gap-2">
                      {category.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center fade-in-up animate">Academic Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 fade-in-up animate">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-success" size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}