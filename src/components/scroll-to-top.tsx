'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 560) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg z-50"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 20,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
