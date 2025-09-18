import React from 'react';
import { GraduationCap, Code2, Database, Server } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Laravel', category: 'Backend' },
    { name: 'Go', category: 'Backend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'PHP', category: 'Backend' },
  ];

  const skillCategories = [
    { icon: Code2, title: 'Frontend Development', skills: skills.filter(s => s.category === 'Frontend') },
    { icon: Server, title: 'Backend Development', skills: skills.filter(s => s.category === 'Backend') },
    { icon: Database, title: 'Database Technologies', skills: skills.filter(s => s.category === 'Database') },
  ];

  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-width">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 fade-in-up animate">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineer specializing in full-stack web development 
                with expertise in Laravel, Go, and React.js. Currently working at EasyBilling 
                Software Company as a Jr. Software Engineer, where I develop scalable web 
                applications and contribute to innovative software solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My academic background in Computer Science & Engineering with a focus on 
                Intelligent Systems & Data Science from East West University has equipped 
                me with strong analytical skills and a deep understanding of modern software 
                development practices.
              </p>
            </div>

            {/* Education */}
            <div className="card-professional">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-success" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">East West University</h3>
                  <p className="text-muted-foreground">Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground">Intelligent Systems & Data Science</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}