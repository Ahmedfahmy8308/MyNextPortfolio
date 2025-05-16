'use client';

import React, { useEffect } from 'react';
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
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <section className="py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 lg:px-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              <span className="inline-block align-middle">About Me
</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 animate-pulse"></span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium italic animate-fade-in">
              Introduction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/me2.jpg"
                alt="Ahmed Fahmy's profile picture"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
              Hi, I&apos;m Ahmed Fahmy — a Software Engineer driven by a passion for crafting secure, scalable, and engaging digital experiences.
              I&apos;m highly skilled in back-end frameworks like .NET Core, NestJS, Node.js, and Flask, and I also build sleek front-ends using React and Tailwind CSS.

              I&apos;m an experienced problem solver, with a strong background in algorithms and competitive programming.
              I have a growing passion for AI and computer vision, having led multiple innovative projects in these fields.

              <br/>Always eager to contribute to impactful solutions, explore emerging technologies, and collaborate on open-source and real-world tech initiatives
              </motion.p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="text-center p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-3xl font-bold text-primary">03+</p>
                  <p className="text-muted-foreground">Years <br />Experience</p>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-muted-foreground">Completed <br />Projects</p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
              >
                <Button asChild className="gap-2 hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  <a href="/pdf/Cv.pdf" download>
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </motion.main>
  );
}
