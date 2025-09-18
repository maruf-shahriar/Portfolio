import React from 'react';
import { Code2, Database, Server, Globe, Settings, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js']
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500 bg-green-500/10 border-green-500/20',
      skills: ['Laravel', 'PHP', 'Go', 'Node.js', 'RESTful APIs', 'GraphQL']
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
      skills: ['Git/GitHub', 'Docker', 'Linux/Unix', 'AWS Basics', 'CI/CD', 'Testing']
    },
    {
      title: 'Data Science & AI',
      icon: BookOpen,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas/NumPy', 'Research Methods', 'Statistical Analysis']
    },
    {
      title: 'Soft Skills',
      icon: Code2,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication', 'Code Review', 'Mentoring']
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and key competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-professional fade-in-up animate">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${category.color}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-muted/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center fade-in-up animate">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div className="text-center fade-in-up animate">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-muted-foreground">Frameworks & Libraries</div>
          </div>
          <div className="text-center fade-in-up animate">
            <div className="text-3xl font-bold text-success mb-2">15+</div>
            <div className="text-muted-foreground">Tools & Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}