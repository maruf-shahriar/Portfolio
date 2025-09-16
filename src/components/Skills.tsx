import React from 'react';
import { Code2, Database, Server, Globe, Settings, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 70 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500 bg-green-500/10 border-green-500/20',
      skills: [
        { name: 'Laravel', level: 95 },
        { name: 'PHP', level: 90 },
        { name: 'Go', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 60 },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Database Design', level: 85 },
        { name: 'Query Optimization', level: 80 },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Linux/Unix', level: 80 },
        { name: 'AWS Basics', level: 60 },
        { name: 'CI/CD', level: 65 },
        { name: 'Testing', level: 70 },
      ]
    },
    {
      title: 'Data Science & AI',
      icon: BookOpen,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Data Analysis', level: 75 },
        { name: 'Pandas/NumPy', level: 65 },
        { name: 'Research Methods', level: 80 },
        { name: 'Statistical Analysis', level: 70 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Code2,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Communication', level: 85 },
        { name: 'Code Review', level: 85 },
        { name: 'Mentoring', level: 75 },
      ]
    }
  ];

  const getSkillBarColor = (category: string) => {
    switch (category) {
      case 'Frontend Development': return 'bg-blue-500';
      case 'Backend Development': return 'bg-green-500';
      case 'Database & Storage': return 'bg-purple-500';
      case 'Tools & DevOps': return 'bg-orange-500';
      case 'Data Science & AI': return 'bg-cyan-500';
      case 'Soft Skills': return 'bg-indigo-500';
      default: return 'bg-primary';
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillBarColor(category.title)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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