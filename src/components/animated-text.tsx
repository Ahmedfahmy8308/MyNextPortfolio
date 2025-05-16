'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function Typewriter({ texts, speed = 100, delay = 1500 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex % texts.length];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length + 1));
        if (displayText === text) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? delay : isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, isWaiting, texts, speed, delay]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="text-primary font-medium"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="ml-0.5 text-primary font-medium"
      >
        |
      </motion.span>
    </span>
  );
}
