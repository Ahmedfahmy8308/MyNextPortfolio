'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollToTop } from '@/components/scroll-to-top';

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

// React Icons imports
import { FaReact, FaNodeJs, FaDocker, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import {
  SiDotnet, SiPostgresql, SiFlask, SiMongodb,
  SiTensorflow, SiBootstrap, SiOpencv, SiNumpy, SiNextdotjs, SiScikitlearn, SiKeras, SiRedux,
  SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript, SiExpress, SiGit, SiFirebase, SiCplusplus, SiMysql, SiVercel, SiGithubactions,
  SiNestjs,
} from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';
import { RiCodeSSlashFill } from 'react-icons/ri';



const skillsData = [
  {
    section: "🖥️ Backend",
    skills: [
      { icon: 'dotnet', name: '.NET Core', level: 90, category: 'backend' },
      { icon: "express", name: "Express.js"  , level: 60, category: 'backend'},
      { icon: 'nestjs', name: 'Nest.js', level: 70, category: 'backend' },
      { icon: 'flask', name: "Flask"  , level: 60, category: 'backend'},
      { icon: 'codeSSlashFill', name: "ASP.NET MVC"  , level: 85, category: 'backend'},
      { icon: 'api', name: "Web API"  , level: 90, category: 'backend'},
      { icon: 'codeSSlashFill', name: "LINQ" , level: 80, category: 'backend' },
      { icon: 'nodejs', name: 'Node.js', level: 70, category: 'backend' },
    ]
  },
  {
    section: "🎨 Frontend",
    skills: [
      { icon: 'react', name: 'React', level: 70, category: 'frontend' },
      { icon: 'nextjs', name: 'Next.js', level: 70, category: 'frontend' },
      { icon: 'tailwind', name: 'Tailwind CSS', level: 70, category: 'frontend' },
      { icon: 'bootstrap', name: 'Bootstrap', level: 80, category: 'frontend' },
      { icon: 'html5', name: "HTML5" , level: 85, category: 'frontend'},
      { icon: 'css3', name: "CSS3" , level: 85, category: 'frontend'},

    ]
  },
  {
    section: "💻 Languages",
    skills: [
      { icon: 'cplusplus', name: 'C++', level: 90, category: 'languages' },
      { icon: 'csharp', name: 'C#', level: 90, category: 'languages' },
      { icon: 'python', name: 'Python', level: 90, category: 'languages' },
      { icon: 'javascript', name: "JavaScript" ,  level: 90, category: 'languages'},
      { icon: 'typescript', name: "TypeScript" , level: 90, category: 'languages' },
      { icon: 'sql', name: "SQL" , level: 90, category: 'languages'},
    ]
  },
  {
    section: "🛠️ Tools & Cloud",
    skills: [
      { icon: FaDocker, name: "Docker"  , level: 90, category: 'tools'},
      { icon: SiGithubactions, name: "GitHub Actions" , level: 85, category: 'tools'},
      { icon: 'git', name: 'Git', level: 85, category: 'tools' },
      { icon: SiVercel, name: "Vercel" , level: 90, category: 'tools'},
    ]
  },
  {
    section: "Databases",
    skills: [
      { icon: 'sql', name: 'SQL Server', level: 90, category: 'databases' },
      { icon: 'mysql', name: "MySQL" , level: 90, category: 'databases' },
      { icon: 'postgreSQL', name: "PostgreSQL"  , level: 80, category: 'databases'},
      { icon: 'firebase', name: 'Firebase', level: 80, category: 'databases' },
      { icon: 'mongodb', name: 'MongoDB', level: 80, category: 'databases' },
    ]
  },
  {
    section: "🧠 AI & Computer Vision",
    skills: [
      { icon: 'opencv', name: "OpenCV" , level: 75, category: 'AI  '},
      { icon: 'tensorflow', name: "TensorFlow", level: 75, category: 'AI  ' },
      { icon: 'IPPython', name: "Image Processing" , level: 75, category: 'AI  '},
      { icon: 'numpy', name: "NumPy" , level: 75, category: 'AI  '},
      { icon: 'scikitlearn', name: "Scikit-Learn" , level: 75, category: 'AI  '},
      { icon: 'keras', name: "Keras" , level: 75, category: 'AI  '},
      { icon: 'CV', name: "Computer Vision" , level: 75, category: 'AI  '},
      { icon: 'matplotlib', name: "Matplotlib", level: 75, category: 'AI  ' },
    ]
  }
];


function getSkillIcon(iconName: string, small = false) {
  const sizeClass = small ? "w-4 h-4" : "w-6 h-6";
  const iconMap: Record<string, React.ReactNode> = {
    react: <FaReact className={sizeClass} />,
    nodejs: <FaNodeJs className={sizeClass} />,
    nextjs: <SiNextdotjs className={sizeClass} />,
    tailwind: <SiTailwindcss className={sizeClass} />,    typescript: <SiTypescript className={sizeClass} />,    javascript: <SiJavascript className={sizeClass} />,
    dotnet: <SiDotnet className={sizeClass} />,
    nestjs: <SiNestjs className={sizeClass} />,
    sql: <FaDatabase className={sizeClass} />,
    mongodb: <SiMongodb className={sizeClass} />,
    csharp: <DiVisualstudio className={sizeClass} />,
    python: <FaPython className={sizeClass} />,
    java: <FaJava className={sizeClass} />,
    git: <SiGit className={sizeClass} />,
    docker: <FaDocker className={sizeClass} />,
    firebase: <SiFirebase className={sizeClass} />,
    siRedux : <SiRedux className={sizeClass} />,
    flask : <SiFlask className={sizeClass} />,
    codeSSlashFill : <RiCodeSSlashFill className={sizeClass} />,
    api : <MdOutlineApi className={sizeClass} />,
    bootstrap: <SiBootstrap className={sizeClass} />,
    vercel: <SiVercel className={sizeClass} />,
    html5: <SiHtml5 className={sizeClass} />,
    css3: <SiCss3 className={sizeClass} />,
    express : <SiExpress className={sizeClass} />,
    cplusplus : <SiCplusplus className={sizeClass} />,
    mysql : <SiMysql className={sizeClass} />,
    postgreSQL : <SiPostgresql className={sizeClass} />,
    opencv: <SiOpencv className={sizeClass} />,
    numpy: <SiNumpy className={sizeClass} />,
    scikitlearn: <SiScikitlearn className={sizeClass} />,
    keras: <SiKeras className={sizeClass} />,
    CV: <SiOpencv className={sizeClass} />,
    matplotlib: <SiOpencv className={sizeClass} />,
    tensorflow: <SiTensorflow className={sizeClass} />,
    IPPython: <SiOpencv className={sizeClass} />,
  };
  return iconMap[iconName] || <span className={sizeClass + " inline-block bg-muted rounded"} />;
}

export default function SkillsPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredSkills = skillsData
    .flatMap(section => section.skills)
    .filter(skill => filter === 'all' ? true : skill.category === filter);
  
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

  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.refresh();
      } catch (error) {
        console.error("Failed to refresh AOS", error);
      }
    };
    
    initAOS();
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <section className="py-24 px-6 md:px-10 lg:px-16  overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 lg:px-20" data-aos="fade-up">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
                <span className="inline-block align-middle bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="flex justify-center mb-4">
                <span className="inline-block w-20 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 animate-pulse"></span>
              </div>
              <p className="text-muted-foreground">My Technical Proficiency</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm w-full max-w-full overflow-x-auto gap-2 sm:gap-0 sm:w-auto hide-scrollbar" role="group">
              {['all', 'backend',  'frontend', 'AI  ' , 'languages', 'databases' , 'tools'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                    filter === category 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/70'
                  } ${
                    category === 'all' ? 'rounded-l-lg' : ''
                  } ${
                    category === 'AI' ? 'rounded-r-lg' : ''
                  } transition-colors duration-300`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filter} 
          >
            {filteredSkills.map((skill, index) => (
              <motion.div key={skill.name + index} variants={itemVariants}>
                <Card className="overflow-hidden h-full aspect-square hover:shadow-md transition-shadow lg:aspect-[1/0.7]">
                  <CardContent className="sm:p-6 p-1">
                    <div className="flex flex-col items-center">
                      <div className="mb-4 text-primary">
                        <span className="sm:block hidden">{typeof skill.icon === 'string' ? getSkillIcon(skill.icon) : React.createElement(skill.icon)}</span>
                        <span className="sm:hidden block">{typeof skill.icon === 'string' ? getSkillIcon(skill.icon, true) : React.createElement(skill.icon, { className: 'w-4 h-4' })}</span>
                      </div>
                      <h3 className="font-medium mb-2 sm:text-base text-xs text-center">{skill.name}</h3>
                      {skill.level && (
                        <>
                          <div className="w-full rounded-full h-2 mb-1 relative bg-muted/50">
                            <motion.div 
                              className="bg-primary h-2 rounded-full absolute left-0 top-0"
                              style={{ zIndex: 2 }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                            <div
                              className="h-2 rounded-full absolute right-0 top-0 bg-red-400/10 dark:bg-red-500/10"
                              style={{ width: `${100 - skill.level}%`, zIndex: 1 }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </motion.main>
  );
}
