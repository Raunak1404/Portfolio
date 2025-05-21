import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Trophy, Users, Zap } from 'lucide-react';
import React from 'type-only';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'School' | 'Competition' | 'Hackathon' | 'Club' | 'Internship' | 'Work';
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '2018 - 2022',
    title: 'Bachelor of Science in Computer Science',
    description: 'Graduated from University Name with a focus on software engineering and web development. Participated in various coding clubs and projects.',
    category: 'School',
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    date: 'Summer 2021',
    title: 'Software Engineering Intern',
    description: 'Interned at Tech Company Inc., where I contributed to the development of a new web application using React and Node.js.',
    category: 'Internship',
    icon: <Briefcase className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    date: 'October 2022',
    title: 'Won 1st Place in Hackathon XYZ',
    description: 'Led a team to victory in a 24-hour hackathon by developing an innovative solution for local community engagement.',
    category: 'Hackathon',
    icon: <Trophy className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    date: '2022 - Present',
    title: 'Joined Coding Club "CodeCrafters"',
    description: 'Active member of CodeCrafters, participating in weekly coding challenges, workshops, and collaborative projects.',
    category: 'Club',
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    id: 5,
    date: '2023 - Present',
    title: 'Junior Web Developer at WebSolutions Co.',
    description: 'Developing and maintaining client websites, focusing on front-end technologies and user experience optimization.',
    category: 'Work',
    icon: <Zap className="h-6 w-6 text-primary" />,
  },
];

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Journey</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          A timeline of key milestones, experiences, and achievements that have shaped my path.
        </p>
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* The timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        {timelineEvents.map((event, index) => (
          <AnimatedSection key={event.id} className="mb-12 md:mb-0" delay={index * 150}>
            <div className="md:flex items-center md:space-x-8 group">
              {/* Date and Icon Column (Left on Desktop) */}
              <div className={cn(
                "md:w-1/2 flex md:justify-end",
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
              )}>
                <div className={cn(
                  "mb-4 md:mb-0 md:pr-8 relative",
                  index % 2 !== 0 && "md:pl-8 md:pr-0"
                )}>
                  <div className="p-3 bg-primary/10 rounded-full inline-block mb-2 ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
                    {event.icon}
                  </div>
                  <p className="text-sm font-semibold text-accent">{event.date}</p>
                  <p className="text-xs text-muted-foreground">{event.category}</p>
                </div>
              </div>

              {/* Card Column (Right on Desktop) */}
              <div className={cn(
                "md:w-1/2 relative",
                 index % 2 === 0 ? "md:pl-8" : "md:pr-8"
              )}>
                 {/* Pointer for desktop */}
                <div className={cn(
                  "hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-t border-r border-border rotate-45",
                  index % 2 === 0 ? "-left-2 border-l-0 border-b-0" : "-right-2 border-r-0 border-t-0 transform -rotate-[135deg]"
                )} aria-hidden="true" />
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground/90">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 leading-relaxed">{event.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

// Helper to make cn available if used in more complex logic, not strictly needed for above
import { cn } from '@/lib/utils';
