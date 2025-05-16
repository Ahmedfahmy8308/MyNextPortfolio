'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollToTop } from '@/components/scroll-to-top';

// Import components with dynamic loading
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'ai';

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
    id: "faculty-management",
    image: "/project1.jpg",
    title: "Faculty Management System",
    description: "The Faculty Management System is a comprehensive platform built to streamline university operations.",
    link: "https://github.com/Ahmedfahmy8308/Faculty-Management-System-website",
    github: "https://github.com/Ahmedfahmy8308/Faculty-Management-System-website",
    categories: ['fullstack'],
    technologies: ['ASP.NET Core', 'SQL Server', 'Bootstrap', 'jQuery']
  },
  {
    id: "elmansa",
    image: "/project2.png",
    title: "Elmansa",
    description: "Elmanssa is a comprehensive software solution for teachers to manage educational activities effectively.",
    link: "https://github.com/Ahmedfahmy8308/Elmansa/tree/main",
    github: "https://github.com/Ahmedfahmy8308/Elmansa/tree/main",
    categories: ['frontend', 'fullstack'],
    technologies: ['React', 'Node.js', 'Firebase', 'Tailwind CSS']
  },
  {
    id: "portfolio-site",
    image: "/portfolio.png",
    title: "Personal Portfolio",
    description: "A sleek, animated portfolio site built with modern web technologies.",
    link: "#",
    github: "https://github.com/Ahmedfahmy8308/portfolio",
    categories: ['frontend'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
  },
  {
    id: "face-recognition",
    image: "/project1.jpg", // Replace with an AI project image
    title: "Face Recognition System",
    description: "A facial recognition system that can identify and verify a person from a digital image or video frame.",
    link: "https://github.com/Ahmedfahmy8308",
    github: "https://github.com/Ahmedfahmy8308",
    categories: ['ai'],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask']
  }
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
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'ai', label: 'AI / ML' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    exit: { 
      y: 50, 
      opacity: 0,
      transition: { duration: 0.2 }
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
      <section className="section py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 lg:px-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 section-heading">Projects</h2>
            <p className="text-muted-foreground">Most recent work</p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  className="transition-all btn"
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all card">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110 rounded-t-xl"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 section-heading">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 mt-auto">
                        {project.github && (
                          <Button asChild variant="outline" size="sm" className="gap-2 btn">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              Code
                            </a>
                          </Button>
                        )}
                        <Button asChild className="gap-2 btn">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Demo
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
