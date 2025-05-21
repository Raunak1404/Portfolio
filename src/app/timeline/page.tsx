
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
  icon: React.ReactNode; // Keep React.ReactNode for icons
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
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const eventItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize elements for animation
    if (timelineLineRef.current) {
      anime.set(timelineLineRef.current, { opacity: 0, scaleY: 0 });
    }
    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          // parts[0] is icon/date column, parts[1] is card column
          // For even index: icon/date is left, card is right
          // For odd index: icon/date is right (due to flex-row-reverse), card is left
          anime.set(parts[0], { opacity: 0, translateX: index % 2 === 0 ? -30 : 30 });
          anime.set(parts[1], { opacity: 0, translateX: index % 2 === 0 ? 30 : -30 });
        }
      }
    });

    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 600, // Default duration for timeline items
    });

    const lineAnimationDuration = 800;
    if (timelineLineRef.current) {
      tl.add({
        targets: timelineLineRef.current,
        opacity: [0, 1],
        scaleY: [0, 1],
        duration: lineAnimationDuration,
        transformOrigin: 'top center',
      }, 0); // Start timeline line animation at the beginning
    }

    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          const firstPartToAnimate = parts[0];
          const secondPartToAnimate = parts[1];
          
          const firstPartTranslateXStart = index % 2 === 0 ? -30 : 30;
          const secondPartTranslateXStart = index % 2 === 0 ? 30 : -30;

          // Animate the first part (icon/date or card depending on index)
          tl.add({
            targets: firstPartToAnimate,
            opacity: [0, 1],
            translateX: [firstPartTranslateXStart, 0],
            translateY: [10,0], // Slight upward movement
            duration: 500,
          }, (lineAnimationDuration * 0.5) + (index * 200)); // Stagger start after line animation is partially done

          // Animate the second part, slightly delayed or overlapping
          tl.add({
            targets: secondPartToAnimate,
            opacity: [0, 1],
            translateX: [secondPartTranslateXStart, 0],
            translateY: [10,0],
            duration: 500,
          }, '-=350'); // Overlap with the animation of the first part
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

      <div className="relative max-w-3xl mx-auto">
        {/* The timeline line */}
        <div 
          ref={timelineLineRef} 
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 md:block"  // Removed 'hidden' to allow animation
          aria-hidden="true"
        ></div>
        
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id}
            ref={el => eventItemRefs.current[index] = el}
            className="md:flex items-start md:items-center md:space-x-8 group mb-12 md:mb-16" // Added vertical spacing, ensure items-start for alignment
          >
            {/* Date and Icon Column */}
            <div className={cn(
              "md:w-1/2 flex",
              index % 2 === 0 ? "md:justify-end md:text-right" : "md:flex-row-reverse md:text-left" 
            )}>
              <div className={cn(
                "mb-4 md:mb-0 relative",
                index % 2 === 0 ? "md:pr-8" : "md:pl-8" 
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
               index % 2 === 0 ? "md:pl-8" : "md:pr-8" 
            )}>
               {/* Pointer for desktop */}
              <div className={cn(
                "hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-border",
                index % 2 === 0 
                  ? "-left-2 border-t border-l rotate-45" // Points to left for card on right
                  : "-right-2 border-b border-r rotate-45" // Points to right for card on left
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
