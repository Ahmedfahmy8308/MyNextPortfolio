'use client';

import React, { useEffect, Suspense } from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ScrollToTop } from '@/components/scroll-to-top';

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function AboutPage() {
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
    <Suspense fallback={<div>Loading...</div>}>
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >        <section className="section pt-16 md:pt-24 pb-6 md:pb-10 px-4 md:px-10 lg:px-16 overflow-hidden relative">
          {/* Background decoration elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-14 lg:px-20 relative" data-aos="fade-up"><div className="text-center mb-12">
              <h2 className="text-2xl md:text-5xl font-extrabold mb-4 section-heading">
                <span className="inline-block align-middle bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">About Me</span>
              </h2>
              <div className="flex justify-center mb-4">
                <span className="inline-block w-16 md:w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 animate-pulse"></span>
              </div>
            </div>
            
            {/* My Introduction Section */}
            <div className="mb-16">              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">My Introduction</h3>
                <div className="flex justify-center">
                  <span className="inline-block w-12 md:w-16 h-1 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60"></span>
                </div>
              </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">              
                <motion.div 
                  className="flex justify-center card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full max-w-[250px] sm:max-w-md overflow-hidden rounded-xl shadow-xl group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                    <div className="relative">
                      <Image
                        src="/me2.jpg"
                        alt="Ahmed Fahmy's profile picture"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-md object-cover w-full h-auto hover:scale-105 transition-transform duration-500 border-2 border-white/20"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div 
  className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 space-y-4 sm:space-y-6 leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
><p>
    Hey there! 👋 I&apos;m <span className="text-primary font-bold">Ahmed Fahmy</span>, a passionate <span className="font-semibold">Software Engineer</span> who thrives on building 
    <span className="text-blue-600 dark:text-blue-400 font-medium"> secure, scalable</span>, and <span className="text-blue-600 dark:text-blue-400 font-medium">engaging</span> digital solutions.
  </p>

  <p>
    I specialize in back-end development using <span className="text-blue-600 dark:text-blue-400 font-semibold">.NET Core</span>, 
    <span className="text-blue-600 dark:text-blue-400 font-semibold"> NestJS</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">Node.js</span>, and <span className="text-blue-600 dark:text-blue-400 font-semibold">Flask</span>. 
    On the front-end, I craft sleek interfaces with <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span> and <span className="text-blue-600 dark:text-blue-400 font-semibold">Tailwind CSS</span>.
  </p>

  <p>
    With a strong foundation in <span className="text-blue-600 dark:text-blue-400 font-medium">algorithms and competitive programming</span>, 
    I enjoy solving complex problems efficiently and creatively.
  </p>

  <p>
    I&apos;m also diving deeper into <span className="text-blue-600 dark:text-blue-400 font-semibold">AI and Computer Vision</span>, having led several exciting projects that push boundaries and drive innovation.
  </p>

  <p>
    Always open to collaboration on <span className="text-primary font-semibold">real-world tech initiatives</span>, open-source contributions, and impactful solutions.
    Let&apos;s build something great together!
  </p>
</motion.div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6">
                    <motion.div 
                      className="text-center p-3 sm:p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow card"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-primary">03+</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Years <br />Experience</p>
                    </motion.div>
                    <motion.div 
                      className="text-center p-3 sm:p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow card"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-primary">20+</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Completed <br />Projects</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section - Completely separate */}        <section className="section py-12 md:py-20 px-4 md:px-10 lg:px-16 overflow-hidden relative bg-muted/20">
          {/* Background decoration elements */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-14 lg:px-20 relative" data-aos="fade-up"><div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 section-heading">
                <span className="inline-block align-middle bg-gradient-to-r from-indigo-400 to-primary bg-clip-text text-transparent">Education</span>
              </h2>
              <div className="flex justify-center mb-3 md:mb-4">
                <span className="inline-block w-16 md:w-24 h-1 rounded-full bg-gradient-to-r from-secondary to-primary opacity-70 animate-pulse"></span>
              </div>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
              <div className="space-y-6">
                {/* University Education */}
                <div className="bg-white/10 dark:bg-card/50 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-lg transition-shadow">                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-xl md:text-2xl text-primary">Faculty of Computers and Information</h4>
                      <p className="text-sm text-muted-foreground">Kafr El-Sheikh University</p>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      2022 - 2026
                    </span>
                  </div>                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p>
                      Bachelor&apos;s degree in Computer Science, focused on software engineering, data structures, AI, and systems architecture.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">GPA: 3.4</span> - Maintaining strong academic performance throughout the program.
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Database Systems & Information Management</li>
                      <li>Software Engineering & Web Development</li>
                      <li>Computer Networks & Security</li>
                      <li>Artificial Intelligence & Machine Learning</li>
                    </ul>
                  </div>
                </div>                {/* High School Education */}
                <div className="bg-white/10 dark:bg-card/50 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-xl md:text-2xl text-primary">High School Certificate</h4>
                      <p className="text-sm text-muted-foreground">Ebshan Secondary School</p>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      Graduated 2022
                    </span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p>
                      Completed the scientific track with a strong academic performance, ranking among the top students in the school.
                    </p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Graduation Grade: <span className="font-medium text-foreground">86.5%</span></li>
                      <li>School Ranking: <span className="font-medium text-foreground">6<sup>th</sup> place</span> overall</li>
                      <li>Focused on Mathematics, Physics, and Chemistry </li>
                    </ul>
                  </div>
                </div>
              </div>                <motion.div 
                  className="flex justify-center mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button 
                    asChild 
                    className="gap-2 bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary text-white shadow-md hover:shadow-lg transition-all py-4 md:py-6 px-6 md:px-8 text-sm md:text-base"
                    size="lg"
                  >
                    <a 
                      href="/pdf/Cv.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span>Download CV</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >                <div className="relative w-full max-w-[250px] sm:max-w-md overflow-hidden rounded-xl shadow-xl group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative">
                    <Image
                      src="/me3.jpg"
                      alt="Faculty of Computers and Information Kafr El-Sheikh University"
                      width={500}
                      height={350}
                      className="rounded-xl shadow-md object-cover w-full h-auto hover:scale-105 transition-transform duration-500 border-2 border-white/20"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-20" />
          <ScrollToTop />
        </section>
        <Footer />
      </motion.main>
    </Suspense>
  );
}
