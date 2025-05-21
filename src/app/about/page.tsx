import AnimatedSection from '@/components/ui/AnimatedSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Zap } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', level: 90, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: 'React', level: 85, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: 'Next.js', level: 80, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: 'Node.js', level: 75, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: 'Tailwind CSS', level: 95, icon: <Zap className="h-5 w-5 text-primary" /> },
  { name: 'Firebase', level: 70, icon: <Zap className="h-5 w-5 text-primary" /> },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          A passionate developer on a journey to create impactful and beautiful digital solutions.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16 md:mb-20">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image 
                src="https://placehold.co/400x500.png" 
                alt="Your Name" 
                width={400} 
                height={500} 
                className="w-full h-full object-cover"
                data-ai-hint="professional portrait" 
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-10">
              <h2 className="text-3xl font-semibold mb-6 text-accent">My Story</h2>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                Hello! I'm Your Name, a [Your Role/Title] with a deep love for technology and creativity. 
                My journey into the world of web development started with a simple curiosity that quickly blossomed into a full-fledged passion. 
                I thrive on turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I believe in continuous learning and am always exploring new technologies and methodologies to enhance my skills. 
                When I'm not coding, you might find me [mention a hobby or two], which helps me maintain a fresh perspective on my work.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My goal is to leverage my skills to contribute to meaningful projects that make a positive impact. 
                I'm excited about the future of technology and eager to be a part of its evolution.
              </p>
            </div>
          </div>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-medium text-accent">{skill.name}</CardTitle>
                {skill.icon}
              </CardHeader>
              <CardContent>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }} 
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{skill.level}% Proficient</p>
                {/* Placeholder for more descriptive text or specific tools under this skill */}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-10 text-lg text-foreground/80">
            ...and always learning more!
        </p>
      </AnimatedSection>

      <AnimatedSection>
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Core Values</h2>
         <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 shadow-lg">
              <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p className="text-foreground/80">Delivering high-quality work with integrity and dedication.</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <Code className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p className="text-foreground/80">Paying attention to detail and striving for excellence in every line of code.</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-foreground/80">Embracing new ideas and technologies to create forward-thinking solutions.</p>
            </Card>
         </div>
      </AnimatedSection>
    </div>
  );
}
