
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, Zap, Plane, Brain, Code2 } from 'lucide-react';
import Image from 'next/image';

// Helper component for Users icon, as it's not standard in lucide-react this way
// If you have a specific 'Users' icon, you can import it. Otherwise, this is a placeholder.
const Users = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const skills = [
  { name: 'Aerospace Fundamentals', level: 85, icon: <Plane className="h-5 w-5 text-primary" /> },
  { name: 'Python', level: 70, icon: <Code className="h-5 w-5 text-primary" /> },
  { name: 'Problem Solving', level: 90, icon: <Brain className="h-5 w-5 text-primary" /> },
  { name: 'AI/ML Concepts', level: 60, icon: <Code2 className="h-5 w-5 text-primary" /> },
  { name: 'Tailwind CSS', level: 95, icon: <Zap className="h-5 w-5 text-primary" /> },
  { name: 'Team Collaboration', level: 80, icon: <Users className="h-5 w-5 text-primary" /> },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          I'm Raunak Saxena, an Aerospace Engineering student at NTU Singapore, passionate about the intersection of aviation, Computer Science, and AI.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16 md:mb-20">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 flex items-center justify-center py-8 px-4 bg-card-foreground/5">
              <div className="relative w-[200px] h-[250px] sm:w-[220px] md:w-[240px] sm:h-[275px] md:h-[300px] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://placehold.co/400x500.png"
                  alt="Raunak Saxena"
                  fill
                  className="object-cover"
                  data-ai-hint="personal photo"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6 md:p-10">
              <h2 className="text-3xl font-semibold mb-6 text-accent">My Story</h2>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                I am Raunak Saxena, a sophomore at Nanyang Technological University, Singapore, currently pursuing a degree in Aerospace Engineering. My passion for the dynamics and mechanics of aircraft and flying objects inspired me to choose this field, as I have always been fascinated by the innovation and precision behind aviation.
              </p>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                In addition to my interest in aerospace, I am deeply intrigued by the intersection of technology and engineering, particularly in the fields of Computer Science and Artificial Intelligence. I aspire to leverage these cutting-edge technologies to make meaningful contributions to the aviation industry, driving innovation and shaping its future.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                With a strong commitment to learning and problem-solving, I am eager to collaborate on projects and opportunities that align with my vision for an AI-driven future in aviation.
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
              <Plane className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precision</h3>
              <p className="text-foreground/80">Inspired by aviation, I value accuracy and attention to detail in all pursuits.</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-foreground/80">Eager to explore new technologies and creative solutions, especially at the nexus of aerospace and AI.</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-foreground/80">Committed to continuous learning and problem-solving to drive progress.</p>
            </Card>
         </div>
      </AnimatedSection>
    </div>
  );
}
