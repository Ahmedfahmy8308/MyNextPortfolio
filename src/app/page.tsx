'use client';

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';

// Import components with dynamic loading
const Hero = dynamic(() => import('@/components/hero'), { ssr: false });
const About = dynamic(() => import('@/components/about'), { ssr: false });
const Services = dynamic(() => import('@/components/services'), { ssr: false });
const Projects = dynamic(() => import('@/components/projects'), { ssr: false });
const Skills = dynamic(() => import('@/components/skills'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/testimonials'), { ssr: false });
const Contact = dynamic(() => import('@/components/contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Set up a single useEffect to handle initialization
  useEffect(() => {
    // Add smooth scrolling behavior
    if (typeof window !== 'undefined') {      
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Function to handle all initializations
    const initialize = async () => {
      // Import CSS for AOS
      const aosStyles = document.createElement('link');
      aosStyles.rel = 'stylesheet';
      aosStyles.href = 'https://unpkg.com/aos@next/dist/aos.css';
      document.head.appendChild(aosStyles);
      
      // Import CSS for Swiper
      const swiperStyles = document.createElement('link');
      swiperStyles.rel = 'stylesheet';
      swiperStyles.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
      document.head.appendChild(swiperStyles);
      
      // Wait for DOM to be fully ready
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Initialize Typed.js
      try {
        const Typed = (await import('typed.js')).default;
        const element = document.querySelector('.auto-input');
        if (element) {
          new Typed(element, {
            strings: [
              "a Software Engineer ....",
              "a student at Faculty of Computers and information ....",
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
          });
        }
      } catch (error) {
        console.error("Failed to load Typed.js", error);
      }
      
      // Initialize AOS
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease-in-out',
          once: false,
          mirror: true,
          delay: 100,
        });
      } catch (error) {
        console.error("Failed to load AOS", error);
      }

      // Delay hiding loader for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    
    initialize();
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="mb-4"
            >
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
            <motion.h2 
              className="text-xl font-medium mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Portfolio...
            </motion.h2>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
            <ScrollToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
