'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="py-20 flex flex-col items-center justify-center min-h-screen relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="flex flex-col gap-6 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/Ahmedfahmy8308" icon="github" />
            <SocialLink href="https://www.instagram.com/a7medfahmy8" icon="instagram" />
            <SocialLink href="https://x.com/Ahmed_fahmy8308" icon="twitter" />
            <SocialLink href="https://api.whatsapp.com/send?phone=201015205654&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B" icon="whatsapp" />
            <SocialLink href="https://www.linkedin.com/in/ahmed-fahmy-174191260/" icon="linkedin" />
          </div>
          
          <div>
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi!<span className="wave">👋</span>, I&apos;m Ahmed Fahmy
            </motion.h1>
            <motion.h3 
              className="text-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              and I&apos;m <span className="text-primary auto-input"></span>
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              A passionate Software Engineer with extensive experience in back-end 
              development and web APIs, delivering high-quality, user-focused solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link href="#contact" passHref>
                <Button size="lg" className="gap-2 hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  Contact Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/me1.jpg"
              alt="Ahmed Fahmy profile picture"
              fill
              className="object-cover rounded-full border-4 border-primary p-1"
              priority
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span>Scroll Down</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-muted-foreground hover:text-primary transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {getIcon(icon)}
    </motion.a>
  );
}
