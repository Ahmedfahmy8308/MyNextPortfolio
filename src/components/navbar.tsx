'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');  
  const [, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
  }`;

  return (
    <motion.header 
      className={headerClasses}
      initial="hidden"
      animate="visible"
      variants={navVariants}    
      >
      <div className="container mx-auto flex items-center justify-between px-8 md:px-14 lg:px-20">        <Link href="/" className="relative group">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="inline-flex items-center md:ml-16 lg:ml-32 xl:ml-28"
          >
            <span className="font-extrabold text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg tracking-tight transition-all duration-300">
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
        
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <ModeToggle />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="hidden md:inline-flex" variant="outline">
              <a href="/pdf/Cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </motion.div>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-8 mt-10">
                <AnimatePresence>
                  {['home', 'about','skills','services', 'projects', 'contact'].map((section, index) => (
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={section === 'home' ? '/' : `/${section}`}
                        className={`text-lg font-medium hover:text-primary transition-colors flex items-center gap-2 py-2 ${
                          activeSection === section ? 'text-primary' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {getNavIcon(section)}
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <Button asChild className="w-full" variant="outline">
                    <a href="/pdf/Cv.pdf" target="_blank" rel="noopener noreferrer">
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function getNavIcon(section: string) {
  switch (section) {
    case 'home':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'about':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'skills':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'services':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'projects':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'contact':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}
