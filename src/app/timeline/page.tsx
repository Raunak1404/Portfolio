
"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Users, Rocket, ShoppingBag, Stethoscope, CircleDollarSign, Wrench, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'Education' | 'Personal Project' | 'Leadership' | 'Work' | 'Competition' | 'Club' | 'Internship';
  icon: React.ReactNode;
}

const rawTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: 'August 2023 – May 2027',
    title: 'Nanyang Technological University, Singapore',
    description: 'Pursuing AeroSpace Engineering with a Minor in Computer Science and Data Analytics. Key courses: Thermofluids, Dynamics, AI. Activities: Indian Society, GDSC, MAE & Welfare Services Clubs.',
    category: 'Education',
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    date: 'September 2023 – May 2024',
    title: 'Treasurer, Indian Society',
    description: 'Managed financial records, secured sponsorships, and collaborated on budgets and community events for IndSoc Club.',
    category: 'Leadership',
    icon: <Landmark className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    date: 'January 2024 – April 2024',
    title: 'Food Delivery System (Personal Project)',
    description: 'Developed a user-friendly food delivery app using Java (OOP), focusing on a robust, scalable, and maintainable codebase.',
    category: 'Personal Project',
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    date: 'September 2024 – November 2024',
    title: 'OrbitWise (Personal Project)',
    description: 'Developing an ML tool (Linear Regression, Decision Trees, etc.) for predicting exoplanetary orbital periods, aiding astronomical research on Earth-like planets.',
    category: 'Personal Project',
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
  {
    id: 5,
    date: 'September 2024 – December 2024',
    title: 'MediMap+ (Personal Project)',
    description: 'Creating an all-in-one healthcare platform for Singapore with features like smart hospital locator, First Aid resources, and online/offline appointment booking.',
    category: 'Personal Project',
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
  },
  {
    id: 6,
    date: 'September 2024 – Present',
    title: 'Financial Controller, NTU Welfare Services Club',
    description: 'Managing club finances, overseeing fund management, collaborating on event planning, and engaging with physically challenged individuals in volunteer sessions.',
    category: 'Leadership',
    icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
  },
  {
    id: 7,
    date: 'September 2024 – Present',
    title: 'Subcommittee Member, Mechanical and Aerospace Engineering Club',
    description: 'Managing backend and logistics operations for MAE NTU events, coordinating event execution, addressing planning challenges, and collaborating for successful initiatives.',
    category: 'Leadership',
    icon: <Wrench className="h-6 w-6 text-primary" />,
  },
];

// Helper to parse date string "Month Year – Month Year" or "Month Year – Present"
const parseStartDate = (dateStr: string): Date => {
  const parts = dateStr.split('–');
  const startDateStr = parts[0].trim();
  
  if (startDateStr.toLowerCase() === 'present') { // Should not happen for start date, but defensive
    return new Date(); 
  }

  const dateParts = startDateStr.split(' ');
  if (dateParts.length === 2) {
    const month = dateParts[0];
    const year = parseInt(dateParts[1], 10);
    // Create a date object. Month is 0-indexed in JS Date.
    const monthIndex = new Date(Date.parse(month +" 1, 2000")).getMonth();
    if (!isNaN(year) && monthIndex !== -1) {
      return new Date(year, monthIndex);
    }
  }
  return new Date(0); // Fallback for unparseable dates
};

const timelineEvents = rawTimelineEvents.sort((a, b) => {
  const dateA = parseStartDate(a.date);
  const dateB = parseStartDate(b.date);
  return dateA.getTime() - dateB.getTime(); // Sorts earliest first
});


export default function TimelinePage() {
  const eventItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          const initialTranslateXPart0 = index % 2 === 0 ? -50 : 50;
          const initialTranslateXPart1 = index % 2 === 0 ? 50 : -50;
          
          anime.set(parts[0], { opacity: 0, translateX: initialTranslateXPart0, translateY: 20 });
          anime.set(parts[1], { opacity: 0, translateX: initialTranslateXPart1, translateY: 20 });
        }
      }
    });

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    eventItemRefs.current.forEach((eventWrapperEl, index) => {
      if (eventWrapperEl) {
        const parts = Array.from(eventWrapperEl.children) as HTMLElement[];
        if (parts.length === 2) {
          const iconDateColumn = parts[0];
          const cardColumn = parts[1];
          
          const baseEventDelay = index * 350; 

          tl.add({
            targets: iconDateColumn,
            opacity: [0, 1],
            translateX: 0,
            translateY: 0,
            duration: 500,
            easing: 'easeOutCubic',
          }, baseEventDelay);

          tl.add({
            targets: cardColumn,
            opacity: [0, 1],
            translateX: 0,
            translateY: 0,
            duration: 500,
            easing: 'easeOutCubic',
          }, baseEventDelay + 150); 
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

      <div className="relative max-w-4xl mx-auto">
        
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id}
            ref={el => eventItemRefs.current[index] = el}
            className={cn(
              "md:flex items-start md:items-center group mb-12 md:mb-16",
              index % 2 === 0 ? "md:space-x-12" : "md:space-x-reverse md:space-x-12"
            )}
          >
            <div className={cn(
              "md:w-1/2 flex",
              index % 2 === 0 ? "md:justify-end md:text-right" : "md:flex-row-reverse md:text-left" 
            )}>
              <div className={cn(
                "mb-4 md:mb-0 relative",
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              )}>
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-2 ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
                  {event.icon}
                </div>
                <p className="text-sm font-semibold text-accent">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.category}</p>
              </div>
            </div>

            <div className={cn(
              "md:w-1/2 relative",
               index % 2 === 0 ? "md:pl-12" : "md:pr-12" 
            )}>
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
