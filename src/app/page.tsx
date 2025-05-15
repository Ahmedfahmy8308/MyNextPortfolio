'use client';

import { useEffect } from "react";
import dynamic from 'next/dynamic';
import { ScrollToTop } from '@/components/scroll-to-top';

// Import components
const Hero = dynamic(() => import('@/components/hero'), { ssr: false });
const About = dynamic(() => import('@/components/about'), { ssr: false });
const Services = dynamic(() => import('@/components/services'), { ssr: false });
const Projects = dynamic(() => import('@/components/projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

export default function Home() {
  // For the typed.js effect
  // Set up a single useEffect to handle initialization
  useEffect(() => {
    // Hide loading spinner
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loading');
      if (loader) {
        setTimeout(() => {
          loader.style.display = 'none';
        }, 800);
      }
    }
    
    // Function to handle all initializations
    const initialize = async () => {
      // Import CSS for AOS
      const aosStyles = document.createElement('link');
      aosStyles.rel = 'stylesheet';
      aosStyles.href = 'https://unpkg.com/aos@next/dist/aos.css';
      document.head.appendChild(aosStyles);
      
      // Wait for DOM to be fully ready
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
          offset: 300,
          duration: 2000,
          once: false,
          delay: 100
        });
      } catch (error) {
        console.error("Failed to load AOS", error);
      }
    };
    
    initialize();
  }, []);

  return (
    <main>
      {/* Loading spinner */}
      <div id="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="spinner animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>

      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
}
