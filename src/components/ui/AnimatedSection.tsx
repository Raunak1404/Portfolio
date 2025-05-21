"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  delay = 0,
  staggerDelay = 100,
  threshold = 0.1,
  once = true,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    // Get direct children that are not script or style tags
    animatedElementsRef.current = Array.from(currentRef.children).filter(
        (child) => child instanceof HTMLElement && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(child.tagName.toUpperCase())
      ) as HTMLElement[];
    
    // Initially hide elements
    anime.set(animatedElementsRef.current, { opacity: 0, translateY: 20 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: animatedElementsRef.current,
              opacity: [0, 1],
              translateY: [20, 0],
              delay: anime.stagger(staggerDelay, { start: delay }),
              duration: 800,
              easing: 'easeOutExpo',
            });
            if (once) {
              observer.unobserve(entry.target);
            }
          } else {
            // Optional: Reset animation if element scrolls out of view and 'once' is false
            if (!once) {
              anime.set(animatedElementsRef.current, { opacity: 0, translateY: 20 });
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, staggerDelay, threshold, once, children]); // Re-run if children change to re-evaluate animatedElementsRef

  return <div ref={sectionRef} className={cn("opacity-1", className)}>{children}</div>;
};

export default AnimatedSection;
