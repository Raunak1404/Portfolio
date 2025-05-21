"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PoemDisplayProps {
  title: string;
  stanzas: string[];
  delay?: number;
}

export default function PoemDisplay({ title, stanzas, delay = 0 }: PoemDisplayProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    if (!currentCardRef) return;

    // Initially hide lines
    anime.set(linesRef.current.filter(el => el !== null), { opacity: 0, translateX: -20 });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: linesRef.current.filter(el => el !== null),
              opacity: [0, 1],
              translateX: [-20, 0],
              delay: anime.stagger(150, { start: delay }),
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(currentCardRef);

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [delay, title]); // Re-run if title changes, ensuring refs are up-to-date

  return (
    <Card ref={cardRef} className="shadow-lg bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {stanzas.map((line, index) => (
            <p 
              key={index} 
              ref={el => linesRef.current[index] = el} 
              className="font-serif text-lg text-foreground/90 opacity-0"
            >
              {line}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
