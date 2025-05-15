'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

type Skill = {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 95, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', level: 90, category: 'frontend' },
  
  // Backend
  { name: '.NET Core', icon: 'dotnet', level: 85, category: 'backend' },
  { name: 'Node.js', icon: 'nodejs', level: 80, category: 'backend' },
  { name: 'Nest.js', icon: 'nestjs', level: 75, category: 'backend' },
  { name: 'SQL', icon: 'sql', level: 80, category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', level: 75, category: 'backend' },
  
  // Languages
  { name: 'C#', icon: 'csharp', level: 90, category: 'languages' },
  { name: 'Python', icon: 'python', level: 80, category: 'languages' },
  { name: 'Java', icon: 'java', level: 70, category: 'languages' },
  
  // Tools
  { name: 'Git', icon: 'git', level: 85, category: 'tools' },
  { name: 'Docker', icon: 'docker', level: 70, category: 'tools' },
  { name: 'Firebase', icon: 'firebase', level: 75, category: 'tools' },
];

function getSkillIcon(iconName: string) {
  // You can replace these with actual SVG icons or use an icon library
  const iconMap: Record<string, React.ReactNode> = {
    react: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 14.597a2.594 2.594 0 100-5.188 2.594 2.594 0 000 5.188z"/>
        <path d="M12 16.5a4.498 4.498 0 01-4.5-4.5 4.498 4.498 0 014.5-4.5 4.498 4.498 0 014.5 4.5 4.498 4.498 0 01-4.5 4.5zm7.979-3.375c.42-.749.571-1.493.42-2.23-.3-1.498-1.621-2.317-3.182-2.317-.66 0-1.381.131-2.101.36-.239-.81-.539-1.5-.87-2.069C12.857 4.93 11.737 4 11.017 4c-.72 0-1.8.93-2.31 2.88-.3.558-.6 1.259-.84 2.069-.72-.229-1.441-.36-2.101-.36-1.56 0-2.881.819-3.182 2.317-.15.739 0 1.493.42 2.23.39.738 1.05 1.498 1.89 2.248-.84.75-1.5 1.499-1.89 2.248-.42.75-.57 1.493-.42 2.23.3 1.499 1.621 2.318 3.182 2.318.66 0 1.381-.131 2.101-.36.24.81.54 1.5.87 2.069.51 1.95 1.59 2.88 2.31 2.88.72 0 1.83-.93 2.279-2.87.331-.569.631-1.259.87-2.069.72.229 1.441.36 2.101.36 1.56 0 2.881-.819 3.182-2.318.15-.738 0-1.493-.42-2.23-.39-.749-1.05-1.498-1.89-2.248.84-.75 1.5-1.499 1.89-2.248z" 
          fillRule="evenodd" 
          clipRule="evenodd"
        />
      </svg>
    ),
    // Add more icons as needed
  };

  return iconMap[iconName] || (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export default function Skills() {
  const [filter, setFilter] = React.useState<string>('all');
  
  const filteredSkills = skills.filter(skill => 
    filter === 'all' ? true : skill.category === filter
  );
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-muted-foreground">My Technical Proficiency</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['all', 'frontend', 'backend', 'languages', 'tools'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/70'
                } ${
                  category === 'all' ? 'rounded-l-lg' : ''
                } ${
                  category === 'tools' ? 'rounded-r-lg' : ''
                } transition-colors duration-300`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter} // Re-run animation when filter changes
        >
          {filteredSkills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 text-primary">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <h3 className="font-medium mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted/50 rounded-full h-2 mb-1">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
