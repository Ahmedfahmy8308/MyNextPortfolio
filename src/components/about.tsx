'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground">My Introduction</p>
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
              Hi, I&apos;m Ahmed Fahmy, a Software Engineer passionate about creating secure, dynamic, 
              and user-friendly digital experiences. With expertise in .NET Core, NEST Nodejs,
              back-end development, front-end technologies, also have good experience in problem-solving,
              I specialize in building scalable and efficient solutions.
              I also have a strong interest in AI and computer vision, 
              where I&apos;ve led several innovative projects. 
              I&apos;m eager to contribute to impactful projects, 
              explore new technologies, and collaborate on open-source initiatives.
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
  );
}
