'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ServiceProps = {
  icon: string;
  title: string;
  description: string[];
  modalTitle: string;
};

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
    icon: "smartphone",
    title: "Mobile App Development",
    modalTitle: "Cross-Platform Mobile Apps",
    description: [
      "Design user-friendly and visually appealing interfaces.",
      "Develop cross-platform apps using Flutter.",
      "Integrate with back-end services like Firebase, custom .NET APIs, or JS APIs",
      "Publish your app on Google Play and the App Store."
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
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="items-center text-center">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            {getIcon(service.icon)}
          </div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <DialogTrigger asChild>
            <Button variant="ghost" className="gap-2 text-primary">
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{service.modalTitle}</DialogTitle>
        </DialogHeader>
        <ul className="space-y-4">
          {service.description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

function getIcon(iconName: string) {
  switch (iconName) {
    case 'database':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case 'code':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <p className="text-muted-foreground">What I Offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
