'use client';

import Script from 'next/script';

export function HomeStructuredData() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ahmed Fahmy",
          "url": "https://ahmedfahmy.me",
          "image": "https://ahmedfahmy.me/images/me1.jpg",
          "sameAs": [
            "https://www.facebook.com/A7medfahmy8",
            "https://github.com/Ahmedfahmy8308",
            "https://www.instagram.com/a7medfahmy8",
            "https://x.com/Ahmed_fahmy8308",
            "https://www.linkedin.com/in/ahmed-fahmy-174191260/"
          ],
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "description": "Back-End Developer specializing in building exceptional digital experiences with expertise in backend development and scalable APIs.",
          "knowsAbout": ["Back-End Development", "Software Engineering", "API Development", "Computer Vision", ".NET Core", "Node.js", "Nest.js", "Flask"]
        })
      }}
    />
  );
}

export function AboutStructuredData() {
  return (
    <Script
      id="about-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Person",
            "name": "Ahmed Fahmy",
            "description": "Software Engineer specializing in back-end development with expertise in .NET Core, Node.js, Nest.js and Flask.",
            "jobTitle": "Software Engineer",
            "knowsAbout": ["Back-End Development", "Software Engineering", "API Development", "Computer Vision", ".NET Core", "Node.js", "Nest.js", "Flask"],
            "alumniOf": "Faculty of Computers and Information",
            "url": "https://ahmedfahmy.me/about"
          }
        })
      }}
    />
  );
}

export function ProjectsStructuredData() {
  return (
    <Script
      id="projects-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Ahmed Fahmy - Projects",
          "description": "Portfolio of development projects by Ahmed Fahmy including backend development, web applications, and APIs.",
          "url": "https://ahmedfahmy.me/projects",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SoftwareSourceCode",
                "name": "Portfolio Website",
                "description": "A modern, responsive portfolio website built with Next.js and TailwindCSS",
                "programmingLanguage": "TypeScript",
                "position": 1
              },
              {
                "@type": "SoftwareSourceCode",
                "name": "Faculty Management System",
                "description": "A comprehensive system for managing faculty operations and student records",
                "programmingLanguage": "C#",
                "position": 2
              }
              
            ]
          }
        })
      }}
    />
  );
}

export function ServicesStructuredData() {
  return (
    <Script
      id="services-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Services Offered by Ahmed Fahmy",
          "description": "Professional software development services offered by Ahmed Fahmy",
          "url": "https://ahmedfahmy.me/services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Back-End Development",
              "description": "Building robust and scalable server-side applications and APIs",
              "position": 1
            },
            {
              "@type": "Service",
              "name": "Web Development",
              "description": "Creating modern, responsive web applications with React and Next.js",
              "position": 2
            },
            {
              "@type": "Service",
              "name": "API Development",
              "description": "Designing and developing RESTful and GraphQL APIs",
              "position": 3
            },
            {
              "@type": "Service",
              "name": "Computer Vision Solutions",
              "description": "Building AI-powered computer vision applications",
              "position": 4
            }
          ]
        })
      }}
    />
  );
}

export function SkillsStructuredData() {
  return (
    <Script
      id="skills-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "name": "Ahmed Fahmy - Skills",
          "description": "Technical skills and competencies of Ahmed Fahmy, Software Engineer",
          "url": "https://ahmedfahmy.me/skills",
          "mainEntity": {
            "@type": "Person",
            "name": "Ahmed Fahmy",
            "skills": [
              ".NET Core",
              "Node.js",
              "Nest.js",
              "Flask",
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "C#",
              "Python",
              "SQL",
              "MongoDB",
              "RESTful APIs",
              "Computer Vision",
              "Docker",
              "Git"
            ]
          }
        })
      }}
    />
  );
}

export function ContactStructuredData() {
  return (
    <Script
      id="contact-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Ahmed Fahmy",
          "description": "Get in touch with Ahmed Fahmy for software development inquiries",
          "url": "https://ahmedfahmy.me/contact",
          "mainEntity": {
            "@type": "Person",
            "name": "Ahmed Fahmy",
            "email": "info@fhmy8308@gmail.com",
            "telephone": "+201015205654",
            "jobTitle": "Software Engineer",
            "url": "https://ahmedfahmy.me/contact"
          }
        })
      }}
    />
  );
}
