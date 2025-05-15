'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="#home" className="font-bold text-xl">
          Ahmed Fahmy
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
            <Link 
              key={section}
              href={`#${section}`}
              className={`transition-colors hover:text-primary ${
                activeSection === section ? 'text-primary font-medium' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          
          <Button asChild className="hidden md:inline-flex" variant="outline">
            <a href="/pdf/Cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
          
          <Sheet>
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
              <div className="flex flex-col gap-8 mt-8">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
