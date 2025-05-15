'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const projects: ProjectProps[] = [
  {
    image: "/project1.jpg",
    title: "Faculty Management System",
    description: "The Faculty Management System is a comprehensive platform built to streamline university operations.",
    link: "https://github.com/Ahmedfahmy8308/Faculty-Management-System-website"
  },
  {
    image: "/project2.png",
    title: "Elmansa",
    description: "Elmanssa is a comprehensive software solution for teachers to manage educational activities effectively.",
    link: "https://github.com/Ahmedfahmy8308/Elmansa/tree/main"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">Most recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button asChild variant="outline" className="gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
