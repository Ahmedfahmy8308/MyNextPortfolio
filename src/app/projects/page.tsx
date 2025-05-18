'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollToTop } from '@/components/scroll-to-top';
import { ProjectsStructuredData } from '@/components/structured-data';
// Import components with dynamic loading
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

type ProjectCategory = 'all' |  'backend' | 'frontend' | 'fullstack' | 'ai' | 'desktop'; ;

type ProjectProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  categories: ProjectCategory[];
  technologies: string[];
};

const projects: ProjectProps[] = [
  {
    id: "IPA-Website",
    image: "/Projects/IPA.jpg",
    title: "IPA Academy Website",
    description: "The IPA Academy website is a platform for students to learn and grow in the field of programming.", 
    link: "https://ipaegy.com/",
    github: "https://github.com/Ahmedfahmy8308",
    categories: ['fullstack' , 'frontend' , 'backend'],
    technologies: ['.NET API', 'SQL Server', 'React', 'Tailwind CSS']
  },
  {
    id: "IEEE Website",
    image: "/Projects/IEEE.jpg",
    title: "IEEE API",
    description: "The IEEE API is a backend service for managing IEEE KSB events and members.",
    link: "https://ieee-ksb.com/",
    github: "https://github.com/Ahmedfahmy8308",
    categories: ['backend'],
    technologies: ['NestJs' , 'MongoDB', 'Swagger', 'JWT Authentication']
  },
  {
    id: "portfolio-site",
    image: "/Projects/portfolio.jpg",
    title: "Personal Portfolio",
    description: "A sleek, animated portfolio site built with modern web technologies.",
    link: "#",
    github: "https://github.com/Ahmedfahmy8308",
    categories: ['frontend'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
  },
  {
    id: "Wasla API",
    image: "/Projects/Wasla.jpg",
    title: "Wasla API",
    description: "The Wasla API is an API for travel and tourism services, providing a seamless experience for users.",
    link: "https://github.com/Ahmedfahmy8308/Wasla-Api",
    github: "https://github.com/Ahmedfahmy8308/Wasla-Api",
    categories: ['backend'],
    technologies: ['.NET API', 'SQL Server', 'Swagger', 'JWT Authentication']
  },
  {
    id: "faculty-management",
    image: "/Projects/faculty-management.jpg",
    title: "Faculty Management System",
    description: "The Faculty Management System is a comprehensive platform built to streamline university operations also login and take attendance with face recognition.",
    link: "https://github.com/Ahmedfahmy8308/Faculty-Management-System-website",
    github: "https://github.com/Ahmedfahmy8308/Faculty-Management-System-website",
    categories: ['fullstack' , 'ai', 'backend'],
    technologies: ['ASP.NET Core', 'SQL Server', 'Bootstrap', 'Html' ,'Js' ,'computer vision' ]
  },
  {
    id: "elmansa",
    image: "/Projects/Elmansa.png",
    title: "Elmansa",
    description: "Elmanssa is a comprehensive software solution for teachers to manage educational activities effectively.",
    link: "https://github.com/Ahmedfahmy8308/Elmansa",
    github: "https://github.com/Ahmedfahmy8308/Elmansa",
    categories: ['backend', 'fullstack'],
    technologies: ['.Net API ', 'Sql Server', 'Bootstrap', 'Html' , 'Js' , ]
  },
  {
    id: "Faculty-management-system-Desktop",
    image: "/Projects/Faculty-management-system-Desktop.jpg", 
    title: "Faculty Management System (Desktop)",
    description: "A desktop application for managing faculty and student records, attendance, and grades. and take attendance with face recognition.",
    link: "https://github.com/Ahmedfahmy8308/Faculty-management-system-Desktop",
    github: "https://github.com/Ahmedfahmy8308/Faculty-management-system-Desktop",
    categories: ['ai' , 'desktop'],
    technologies: ['Python', 'OpenCV', 'Tkinter', 'Firebase' , 'Face Recognition']
  },
  {
    id: "Student-management-system",
    image: "/Projects/Student-management-system.jpg", 
    title: "Student Management System",
    description: "Create a comprehensive Student Management System using Python, Tkinter for the graphical user interface, and MySQL for database management.",
    link: "https://github.com/Ahmedfahmy8308/Student-management-system",
    github: "https://github.com/Ahmedfahmy8308/Student-management-system",
    categories: [ 'desktop'],
    technologies: ['Python',  'Tkinter', 'MySQL' ]
  },  
  {
    id: "Elgad",
    image: "/Projects/Elgad.jpg", 
    title: "Elgad",
    description: "A professional website developed for a client specializing in kitchen and aluminum manufacturing to showcase their work and products attractively to potential customers. The site includes an interactive portfolio with an easy-to-use content management system.",
    link: "https://elgad.runasp.net/",
    github: "https://elgad.runasp.net/",
    categories: [ 'backend'],
    technologies: ['AsP.NET Core', 'SQL Server', 'MVC', 'jwt']
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<ProjectProps[]>(projects);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.categories.includes(activeCategory))
      );
    }
  }, [activeCategory]);

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
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'desktop', label: 'Desktop' },
    { value: 'ai', label: 'AI / ML' }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    },
    exit: { 
      y: 30, 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

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
      <ProjectsStructuredData />
      <section className="py-24 px-6 md:px-10 lg:px-16 overflow-hidden relative">
        {/* Background decoration elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-500/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-6 md:px-14 lg:px-20" data-aos="fade-up">          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading relative inline-block">
                <span className="inline-block py-2 bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Projects</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-400 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.7 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                ></motion.span>
              </h2>
              <motion.p 
                className="text-muted-foreground max-w-md mx-auto mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Explore my latest work and projects
              </motion.p>
          </div><div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  className={`transition-all duration-300 text-xs sm:text-sm rounded-full px-4 py-1 h-auto sm:h-9 ${
                    activeCategory === category.value 
                      ? "bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary text-white shadow-md" 
                      : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                  }`}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div></div>          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -12, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 card border-primary/5 dark:border-primary/10 rounded-xl bg-card/90 backdrop-blur-sm">
                    <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110 rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 section-heading bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent inline-block">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-primary/10 text-xs sm:text-sm px-2 py-0.5 rounded-full border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 sm:gap-3 mt-auto">
                        {project.github && (
                          <Button asChild variant="outline" size="sm" className="gap-1.5 sm:gap-2 btn text-xs sm:text-sm px-3 py-1.5 h-auto sm:h-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              Code
                            </a>
                          </Button>
                        )}
                        <Button asChild className="gap-1.5 sm:gap-2 btn text-xs sm:text-sm px-3 py-1.5 h-auto sm:h-9 rounded-full bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary transition-all duration-300">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Demo
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </motion.main>
  );
}
