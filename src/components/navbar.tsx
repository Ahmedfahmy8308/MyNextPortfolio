'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');  
  const [, setMounted] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    let section = pathname === '/' ? 'home' : pathname.substring(1);
    if (!section) section = 'home';
    setActiveSection(section);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of the menu button
      if (isFabOpen) {
        const target = event.target as Element;
        // Close the menu when clicking outside
        if (target && !target.closest('.fab-button')) {
          setIsFabOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFabOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };
  const activeIndicator = {
    initial: { width: 0 },
    animate: { 
      width: '100%',
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };
  const menuItemVariants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        scale: { 
          type: "spring", 
          stiffness: 300, 
          damping: 24,
          delay: i * 0.05
        },
        opacity: { duration: 0.2, delay: i * 0.05 }
      }
    }),
    closed: {
      opacity: 0,
      y: 10,
      scale: 0.8,
      transition: {
        y: { stiffness: 300 },
        opacity: { duration: 0.2 }
      }
    }
  };

  const headerClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
  }`;

  return (
    <motion.header 
      className={headerClasses}
      initial="hidden"
      animate="visible"
      variants={navVariants}    
      >
      <div className="container mx-auto flex items-center justify-between px-4 pr-0 sm:px-6 md:px-14 lg:px-20">
        <Link href="/" className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center md:ml-16 lg:ml-32 xl:ml-28"
          >
            <span className="font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
              Ahmed Fahmy
            </span>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              href={section === 'home' ? '/' : `/${section}`}
              className="relative group py-2"
            >
              <motion.span
                className={`transition-colors ${activeSection === section ? 'text-primary font-medium' : ''}`}
                variants={linkVariants}
                initial="normal"
                whileHover="hover"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.span>
              {activeSection === section && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  variants={activeIndicator}
                  initial="initial"
                  animate="animate"
                  layoutId="activeSection"
                />
              )}
              {activeSection !== section && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:gap-4">          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <ModeToggle />
          </motion.div>          {/* Mobile FAB Navigation Menu - Positioned at top flush with right edge */}          <div className="md:hidden relative flex items-start justify-end -mr-1">
            {/* Main FAB Button - Hamburger Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFabOpen((prev) => !prev)}
              className="relative overflow-hidden fab-button"
              aria-label={isFabOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-full h-full"
              >
                {isFabOpen ? (                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <line x1="4" x2="20" y1="6" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line x1="4" x2="20" y1="12" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <line x1="4" x2="20" y1="18" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
              </motion.div>
            </Button>            {/* Floating Menu Items */}
            <AnimatePresence>              
              {isFabOpen && (                  <div className="absolute top-full right-0 z-40 fab-menu" onClick={() => setIsFabOpen(false)}>
                  <div className="flex flex-row flex-wrap justify-end gap-2 p-1.5 pr-0 mt-2 mr-[-4px]" onClick={(e) => e.stopPropagation()}>{['home', 'about', 'skills', 'services', 'projects', 'contact'].map((section, i) => (
                      <motion.div
                        key={section}
                        custom={i + 1}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="flex flex-col items-center justify-center gap-1 mx-1 w-[35px]"
                      >
                        <Link
                          href={section === 'home' ? '/' : `/${section}`}
                          onClick={() => setIsFabOpen(false)}
                          className="flex flex-col items-center"
                        >                          <motion.div
                            className={`size-7 rounded-md flex items-center justify-center 
                                      ${activeSection === section ? 'bg-gradient-to-r from-primary to-secondary text-white scale-125 z-10' : 'bg-white dark:bg-gray-800 text-primary'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {getNavIcon(section)}
                          </motion.div>                          <motion.div
                            className={`px-1 py-0.5 rounded-md text-xs mt-0.5 ${activeSection === section ? 'font-bold' : 'font-medium'}`}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ delay: i * 0.05 + 0.1 }}
                          >
                            <span className={`text-[10px] ${activeSection === section ? 'text-primary font-bold' : 'text-foreground'}`}>
                              {section.charAt(0).toUpperCase() + section.slice(1)}
                            </span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}                    {/* CV Download Button */}
                    <motion.div
                      custom={7}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="flex flex-col items-center justify-center gap-1 mx-1 w-[35px]"
                    >
                      <motion.a
                        href="/pdf/Cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsFabOpen(false)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                      >                        <motion.div
                          className="size-8 rounded-md flex items-center justify-center"
                        ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </motion.div>                        <motion.div
                          className="px-1 py-0.5 rounded-md text-xs mt-0.5"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ delay: 7 * 0.05 + 0.1 }}
                        >
                          <span className="text-[10px] font-medium">CV</span>
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="hidden md:inline-flex" variant="outline">
              <a href="/pdf/Cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

function getNavIcon(section: string) {
  switch (section) {    case 'home':
      return (        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );    case 'about':      return (        <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );    case 'skills':
      return (        <svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'services':
      return (        <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );    case 'projects':
      return (        <svg className="h-5 w-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );    case 'contact':
      return (        <svg className="h-5 w-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}
