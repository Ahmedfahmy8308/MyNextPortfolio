'use client';

import { useEffect, useState, useRef, Suspense } from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { ScrollToTop } from '@/components/scroll-to-top';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

// Use hardcoded fixed values that match exactly between server and client rendering
const backgroundParticles = [
  { width: '91px', height: '152px', top: '38%', left: '4%', xMovement: 20, yMovement: 30 },
  { width: '146px', height: '100px', top: '94%', left: '40%', xMovement: -25, yMovement: -15 },
  { width: '120px', height: '74px', top: '54%', left: '10%', xMovement: 15, yMovement: -20 },
  { width: '154px', height: '121px', top: '10%', left: '11%', xMovement: -10, yMovement: 25 },
  { width: '109px', height: '92px', top: '77%', left: '56%', xMovement: 5, yMovement: -30 },
  { width: '143px', height: '61px', top: '11%', left: '6%', xMovement: -15, yMovement: 10 },
  { width: '83px', height: '149px', top: '61%', left: '46%', xMovement: 30, yMovement: -5 },
  { width: '138px', height: '143px', top: '94%', left: '11%', xMovement: -20, yMovement: 15 },
  { width: '60px', height: '130px', top: '7%', left: '78%', xMovement: 10, yMovement: -25 },
  { width: '99px', height: '142px', top: '45%', left: '97%', xMovement: -5, yMovement: 20 },
  { width: '153px', height: '142px', top: '36%', left: '37%', xMovement: 25, yMovement: -10 },
  { width: '114px', height: '114px', top: '56%', left: '68%', xMovement: -30, yMovement: 5 },
  { width: '127px', height: '146px', top: '49%', left: '68%', xMovement: 15, yMovement: -20 },
  { width: '138px', height: '91px', top: '76%', left: '36%', xMovement: -10, yMovement: 25 },
  { width: '93px', height: '79px', top: '96%', left: '88%', xMovement: 5, yMovement: -15 }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
      const alreadyLoaded = sessionStorage.getItem('portfolioLoaded');
      if (alreadyLoaded) {
        setIsLoading(false);
        return () => {
          document.documentElement.style.scrollBehavior = '';
        };
      }
    }
    
    const initialize = async () => {
      const aosStyles = document.createElement('link');
      aosStyles.rel = 'stylesheet';
      aosStyles.href = 'https://unpkg.com/aos@next/dist/aos.css';
      document.head.appendChild(aosStyles);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
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
      }      setTimeout(() => {
        setIsLoading(false);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('portfolioLoaded', 'true');
        }
      }, 2000); 
    };
    
    initialize();
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    if (!isLoading && typedRef.current) {
      let typed: import('typed.js').default | undefined;
      (async () => {
        const Typed = (await import('typed.js')).default;
        typed = new Typed(typedRef.current!, {
          strings: [
            "a Software Engineer ",
            "a Back-End Developer ",
            "a student at Faculty of Computers and information ",
          ],          
          typeSpeed: 50,
          backSpeed: 40,
          loop: true,
        });
      })();
      return () => {
        if (typed) typed.destroy();
      };
    }
  }, [isLoading]);
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut",
        staggerChildren: 0.1 
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

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
  return (
    <Suspense fallback={
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-indigo-600/30 border-t-indigo-600 animate-spin"></div>
          <p className="text-sm text-muted-foreground">...</p>
        </div>
      </div>
    }>
      <div className="absolute left-4 top-28 h-[70vh] flex flex-col gap-4 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/60 scrollbar-track-transparent items-center">
        <SocialLink href="https://github.com/Ahmedfahmy8308" icon="github" />
        <SocialLink href="https://www.instagram.com/a7medfahmy8" icon="instagram" />
        <SocialLink href="https://x.com/Ahmed_fahmy8308" icon="twitter" />
        <SocialLink href="https://api.whatsapp.com/send?phone=201015205654&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%F0%9F%91%8B" icon="whatsapp" />
        <SocialLink href="https://www.linkedin.com/in/ahmed-fahmy-174191260/" icon="linkedin" />
      </div>      
      {isLoading ?
        (<motion.div key="loader" 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            transition: { 
              duration: 1,
              ease: "easeInOut" 
            }
          }}
        >      
        {/* Animated background with flowing particles */} 
            <div className="absolute inset-0 overflow-hidden">
            {backgroundParticles.map((particle, i) => (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-600/20 dark:from-indigo-400/20 dark:to-blue-400/20 blur-md"
                style={{
                  width: particle.width,
                  height: particle.height,
                  top: particle.top,
                  left: particle.left,
                }}
                animate={{ 
                  x: [0, particle.xMovement, 0],
                  y: [0, particle.yMovement, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{                  
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >           
          {/* AF Logo with rotation */}
            <motion.div 
              className="relative w-28 h-28"                
              animate={{ 
                  rotate: 360
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
            >
              {/* Pulse effect rings */}              
              <motion.div
                className="absolute inset-[-10px] rounded-full"
                animate={{ 
                  boxShadow: [
                    "0px 0px 0px 0px rgba(67, 56, 202, 0)",
                    "0px 0px 0px 10px rgba(67, 56, 202, 0.15)",
                    "0px 0px 0px 20px rgba(67, 56, 202, 0)",
                  ],
                  scale: [0.95, 1, 0.95]
                }}                transition={{ 
                  duration: 1.5, // Faster pulse effect
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />{/* Outer rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{ borderTopColor: '#4338ca', borderBottomColor: '#0369a1' }}
                animate={{ 
                  rotate: 360
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-[-5px] rounded-full border-2 border-transparent"
                style={{ borderRightColor: '#4338ca', borderLeftColor: '#0369a1', opacity: 0.7 }}
                animate={{ 
                  rotate: -180
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Center logo */}
              <motion.div 
                className="absolute inset-2 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"                animate={{ 
                  boxShadow: ["0px 0px 10px rgba(79, 70, 229, 0.3)", "0px 0px 20px rgba(79, 70, 229, 0.6)", "0px 0px 10px rgba(79, 70, 229, 0.3)"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 1.5, // Faster animation
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >                
              {/* Counter-rotating text to keep it upright */}
                <motion.div 
                  className="relative flex items-center justify-center w-full h-full"
                  animate={{ 
                    rotate: -360
                  }}
                  transition={{                    
                    rotate: {
                      duration: 5, 
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {/* First letter with glow effect */}
                  <motion.span 
                    className="text-4xl font-bold text-white absolute"                    animate={{ 
                      textShadow: [
                        "0px 0px 5px rgba(255,255,255,0.2), 0px 0px 10px rgba(79, 70, 229, 0.3)",
                        "0px 0px 15px rgba(255,255,255,0.8), 0px 0px 30px rgba(79, 70, 229, 0.8)",
                        "0px 0px 5px rgba(255,255,255,0.2), 0px 0px 10px rgba(79, 70, 229, 0.3)"
                      ],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0
                    }}
                    style={{ left: "calc(50% - 20px)" }}
                  >
                    A
                  </motion.span>
                  
                  {/* Second letter with glow effect, slightly delayed */}
                  <motion.span 
                    className="text-4xl font-bold text-white absolute"
                    animate={{ 
                      textShadow: [
                        "0px 0px 5px rgba(255,255,255,0.2), 0px 0px 10px rgba(79, 70, 229, 0.3)",
                        "0px 0px 15px rgba(255,255,255,0.8), 0px 0px 30px rgba(79, 70, 229, 0.8)",
                        "0px 0px 5px rgba(255,255,255,0.2), 0px 0px 10px rgba(79, 70, 229, 0.3)"
                      ],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    style={{ left: "calc(50% + 4px)" }}
                  >
                    F
                  </motion.span>
                </motion.div>
              </motion.div>
                {/* Decorative dots */}
              {/* Removed the decorative dots as requested */}
            </motion.div>              
            {/* Loading indicator - Progress bar style */}
            <motion.div 
              className="absolute -bottom-10 w-36 flex flex-col gap-1 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >              <motion.div 
                className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-indigo-500 dark:to-blue-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: ["0%", "100%", "0%"], 
                  }}
                  transition={{
                  duration: 1.5, // Faster animation
                  repeat: Infinity, 
                  ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.p
                className="text-xs text-foreground/70"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.main
          key="main"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
        >
          <section id="home" className="py-20 px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8 md:px-14 lg:px-20">
              <motion.div 
                className="flex flex-col gap-6 order-2 md:order-1 xl:ml-28"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>                      <motion.h1                    
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-indigo-400 dark:to-blue-400 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}>  
                    Ahmed Fahmy
                  </motion.h1>
                  <motion.h3 
                    className="text-2xl mb-4 font-medium flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                  <span ref={typedRef} className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-500 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-300 font-bold auto-input text-base sm:text-lg md:text-xl lg:text-2xl"></span>
                  </motion.h3>
                    <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <div className="absolute left-0 w-20 h-1 bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-indigo-500 dark:to-blue-400 rounded-full shadow-sm"></div>
                  </motion.div>
                    <motion.p 
                    className="text-muted-foreground mb-6 text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}                  >                    <span className="font-medium text-indigo-700 dark:text-indigo-400">Full-Stack Developer</span> specializing in building exceptional digital experiences.
                    With expertise in <span className="font-medium text-indigo-700 dark:text-indigo-400">backend development</span> and 
                    <span className="font-medium text-indigo-700 dark:text-indigo-400"> scalable APIs</span>.
                    My passion lies in solving complex technical challenges through elegant solutions, 
                    approaching each project with a keen eye for design and performance optimization.
                  </motion.p><motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex gap-4"
                  >                    <Link href="/contact" passHref>                      <Button size="lg" className="gap-2 hover:shadow-lg hover:translate-y-[-2px] transition-all bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md">
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
                className="order-1 md:order-2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Background shapes */}                <motion.div
                  className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-indigo-600/10 to-blue-600/10 dark:from-indigo-400/10 dark:to-blue-400/10 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                  <div className="relative">
                  {/* Rotating circle decoration */}                  <motion.div
                    className="absolute -z-1 inset-[-10px] rounded-full border-2 border-dashed border-indigo-700/30 dark:border-indigo-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Main image */}                  <div className="relative w-64 h-64 md:w-80 md:h-80">                    <Image
                      src="/me1.jpg"
                      alt="Ahmed Fahmy profile picture"
                      fill
                      className="object-cover rounded-full border-4 border-indigo-700/80 dark:border-indigo-500/80 p-1 shadow-md"
                      priority
                    />
                    
                    {/* Highlight effect */}                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-700/40 dark:from-indigo-500/40 to-transparent"
                      animate={{ 
                        opacity: [0, 0.4, 0],
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <Footer />
          <ScrollToTop />
        </motion.main>
      )}
    </Suspense>
  );
}
