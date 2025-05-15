'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type TestimonialProps = {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    content: "Ahmed is an exceptional software engineer. His ability to create elegant, efficient solutions to complex problems is impressive. He's not only technically proficient but also communicates effectively and is a great team player.",
    name: "Sarah Johnson",
    position: "Lead Developer",
    company: "Tech Innovations",
    image: "/testimonials/person1.jpg" // Replace with actual image or use a placeholder
  },
  {
    content: "Working with Ahmed was a game-changer for our project. His deep knowledge of backend systems and commitment to writing clean, maintainable code significantly enhanced our application's performance.",
    name: "Michael Rodriguez",
    position: "Project Manager",
    company: "Digital Solutions Inc.",
    image: "/testimonials/person2.jpg" // Replace with actual image or use a placeholder
  },
  {
    content: "Ahmed consistently delivers high-quality work ahead of schedule. His technical expertise, especially in .NET and React, combined with his problem-solving skills, makes him an invaluable asset to any development team.",
    name: "Aisha Patel",
    position: "CTO",
    company: "FutureTech",
    image: "/testimonials/person3.jpg" // Replace with actual image or use a placeholder
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
          <p className="text-muted-foreground">What Others Say</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full">
                        <div className="bg-primary/10 w-full h-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <svg className="w-8 h-8 mx-auto mb-4 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"/>
                        </svg>
                        <p className="text-base italic mb-4">{testimonial.content}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position} • {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
