
"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Trophy, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const eventItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize event items for animation
    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          // parts[0] is icon/date column, parts[1] is card column
          // For even index: icon/date is left, card is right
          // For odd index: icon/date is right (due to flex-row-reverse), card is left
          const initialTranslateXPart0 = index % 2 === 0 ? -50 : 50;
          const initialTranslateXPart1 = index % 2 === 0 ? 50 : -50;
          
          anime.set(parts[0], { opacity: 0, translateX: initialTranslateXPart0, translateY: 20 });
          anime.set(parts[1], { opacity: 0, translateX: initialTranslateXPart1, translateY: 20 });
        }
      }
    });

    const tl = anime.timeline({
      easing: 'easeOutExpo',
      // Default duration can be set here, or per animation
    });

    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          const iconDateColumn = parts[0];
          const cardColumn = parts[1];
          
          const baseEventDelay = index * 350; // Stagger start of each event group

          // Animate the icon/date column
          tl.add({
            targets: iconDateColumn,
            opacity: [0, 1],
            translateX: 0, // Animate to final X position
            translateY: 0, // Animate to final Y position
            duration: 500,
            easing: 'easeOutCubic',
          }, baseEventDelay);

          // Animate the card column, slightly delayed
          tl.add({
            targets: cardColumn,
            opacity: [0, 1],
            translateX: 0, // Animate to final X position
            translateY: 0, // Animate to final Y position
            duration: 500,
            easing: 'easeOutCubic',
          }, baseEventDelay + 150); // Start card animation a bit after its corresponding icon/date
        }
      }
    });

  }, []);


  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Journey</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          A timeline of key milestones, experiences, and achievements that have shaped my path.
        </p>
      </AnimatedSection>

      <div className="relative max-w-4xl mx-auto"> {/* Increased max-width */}
        {/* The timeline line is removed */}
        
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id}
            ref={el => eventItemRefs.current[index] = el}
            className={cn(
              "md:flex items-start md:items-center group mb-12 md:mb-16",
              index % 2 === 0 ? "md:space-x-12" : "md:space-x-reverse md:space-x-12" // Adjusted spacing
            )}
          >
            {/* Date and Icon Column */}
            <div className={cn(
              "md:w-1/2 flex",
              index % 2 === 0 ? "md:justify-end md:text-right" : "md:flex-row-reverse md:text-left" 
            )}>
              <div className={cn(
                "mb-4 md:mb-0 relative",
                index % 2 === 0 ? "md:pr-12" : "md:pl-12" // Matched spacing adjustment
              )}>
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-2 ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
                  {event.icon}
                </div>
                <p className="text-sm font-semibold text-accent">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.category}</p>
              </div>
            </div>

            {/* Card Column */}
            <div className={cn(
              "md:w-1/2 relative",
               index % 2 === 0 ? "md:pl-12" : "md:pr-12" // Matched spacing adjustment
            )}>
               {/* Pointer for desktop */}
              <div className={cn(
                "hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-border",
                index % 2 === 0 
                  ? "-left-2 border-t border-l rotate-45" 
                  : "-right-2 border-b border-r rotate-45" 
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
        ))}
      </div>
    </div>
  );
}

