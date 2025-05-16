'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollToTop } from '@/components/scroll-to-top';

// Import components with dynamic loading
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const services: ServiceProps[] = [
  {
    icon: "database",
    title: "API Development",
    modalTitle: "RESTful API Development",
    description: [
      "Develop secure and scalable APIs tailored to your needs.",
      "Built using .NET Core for high performance and reliability or NEST Nodejs",
      "Integration with databases like SQL Server, MySQL, MongoDB and Firebase.",
      "Ensure maintainability and security with best practices."
    ]
  },
  {
    icon: "code",
    title: "Website Development",
    modalTitle: "Full-Stack Website Development",
    description: [
      "Design intuitive and responsive user interfaces.",
      "Develop front-end using modern technologies like Tailwind and React.",
      "Build robust back-end systems using .NET Core or NEST Nodejs.",
      "Deploy and maintain your website for optimal performance."
    ]
  },
  {
    icon: "cpu",
    title: "Artificial Intelligence",
    modalTitle: "AI Solutions",
    description: [
      "Implement AI scripts for websites or mobile apps.",
      "Integrate chatbots for enhanced user interaction.",
      "Develop FaceID systems for secure authentication.",
      "Create classification and prediction models using machine learning."
    ]
  }
];

function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="items-center text-center pb-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Click to learn more about my {service.title.toLowerCase()} services
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <span className="text-primary">{getIcon(service.icon)}</span>
            {service.modalTitle}
          </DialogTitle>
        </DialogHeader>
        <ul className="space-y-4 mt-4">
          {service.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Button asChild>
            <a href="/contact">Request Service</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function getIcon(iconName: string) {
  switch (iconName) {
    case 'database':
      return (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case 'code':
      return (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.refresh();
      } catch (error) {
        console.error("Failed to refresh AOS", error);
      }
    };
    
    initAOS();
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <section className="py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 lg:px-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              <span className="inline-block align-middle">Services</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 animate-pulse"></span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium italic animate-fade-in">
              What I offer
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="w-full flex justify-center">
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </motion.main>
  );
}

