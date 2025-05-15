import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground">My Introduction</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/me2.jpg"
              alt="Ahmed Fahmy's profile picture"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Hi, I&apos;m Ahmed Fahmy, a Software Engineer passionate about creating secure, dynamic, 
              and user-friendly digital experiences. With expertise in .NET Core, NEST Nodejs,
              back-end development, front-end technologies, also have good experience in problem-solving,
              I specialize in building scalable and efficient solutions.
              I also have a strong interest in AI and computer vision, 
              where I&apos;ve led several innovative projects. 
              I&apos;m eager to contribute to impactful projects, 
              explore new technologies, and collaborate on open-source initiatives.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">03+</p>
                <p className="text-muted-foreground">Years <br />Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground">Completed <br />Projects</p>
              </div>
            </div>
            
            <Button asChild className="gap-2">
              <a href="/pdf/Cv.pdf" download>
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
