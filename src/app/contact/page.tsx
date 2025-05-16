'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { ScrollToTop } from '@/components/scroll-to-top';
import { messageService } from '@/lib/services';

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

type ContactFormData = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>();  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    
    try {
      await messageService.sendMessage({
        name: data.name,
        phone: data.phone,
        subject: data.subject,
        content: data.message
      });
      
      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Message Failed", {
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: i * 0.1 
      } 
    })
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
      <section className="py-24 px-6 md:px-10 lg:px-16  overflow-hidden">
          {/* Background decoration elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          
          <div className="container mx-auto px-8 md:px-14 lg:px-20" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
                <span className="inline-block align-middle bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Contact Me</span>
              </h2>
              <div className="flex justify-center mb-4">
                <span className="inline-block w-20 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 animate-pulse"></span>
              </div>
              <p className="text-muted-foreground">Let&apos;s work together!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <motion.div 
                className="md:col-span-1 space-y-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-md transition-all"
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-indigo-400/20">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:ahmedfahmy@ieee.com" className="text-muted-foreground hover:text-primary transition-colors">
                      ahmedfahmy@ieee.com
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-md transition-all"
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-indigo-400/20 to-primary/20">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Github</h3>
                    <a 
                      href="https://github.com/Ahmedfahmy8308" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Ahmedfahmy8308
                    </a>
                  </div>                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-md transition-all"
                  variants={contactItemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/ahmed-fahmy-174191260/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Ahmed Fahmy
                    </a>
                  </div>
                </motion.div>
              </motion.div>              <motion.form 
                onSubmit={handleSubmit(onSubmit)} 
                className="md:col-span-2 space-y-6 card bg-background/70 backdrop-blur-sm p-6 rounded-xl border border-border/40 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div className="space-y-2" variants={formItemVariants} custom={0}>
                    <label htmlFor="name" className="text-sm font-medium">                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name", { 
                        required: "Name is required",
                        minLength: { value: 2, message: "Name must have at least 2 characters" }
                      })}
                      className={errors.name ? "border-red-500" : "border-border/50 focus:border-primary/50 bg-background/60"}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </motion.div>
                  
                  <motion.div className="space-y-2" variants={formItemVariants} custom={1}>
                    <label htmlFor="phone" className="text-sm font-medium">                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="+20 10xxxxxxxx"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: { 
                          value: /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                          message: "Invalid phone number format"
                        }
                      })}
                      className={errors.phone ? "border-red-500" : "border-border/50 focus:border-primary/50 bg-background/60"}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </motion.div>
                </div>
                
                <motion.div className="space-y-2" variants={formItemVariants} custom={2}>
                  <label htmlFor="subject" className="text-sm font-medium">                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What would you like to discuss?"
                    {...register("subject", { 
                      required: "Subject is required" 
                    })}
                    className={errors.subject ? "border-red-500" : "border-border/50 focus:border-primary/50 bg-background/60"}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </motion.div>
                
                <motion.div className="space-y-2" variants={formItemVariants} custom={3}>
                  <label htmlFor="message" className="text-sm font-medium">                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    {...register("message", { 
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must have at least 10 characters" }
                    })}
                    className={errors.message ? "border-red-500" : "border-border/50 focus:border-primary/50 bg-background/60"}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </motion.div>
                
                <motion.div variants={formItemVariants} custom={4}>                  <Button 
                    type="submit" 
                    disabled={loading} 
                    className="gap-2 bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary text-white shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </motion.main>
  );
}
