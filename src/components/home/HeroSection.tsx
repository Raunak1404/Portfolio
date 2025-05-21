"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null); // Ref for the button's container div

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    });

    timeline
      .add({
        targets: nameRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        delay: 300,
      })
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
      }, '-=600') // Start 600ms before the previous animation ends
      .add({
        targets: taglineRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
      }, '-=700')
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
      }, '-=800');
      
  }, []);

  const scrollToNextSection = () => {
    // Assuming next section is identifiable or just scroll down a bit
    const firstSection = document.querySelector('main > div > section:nth-of-type(1)'); // Adjust selector if needed
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="h-[calc(100vh-var(--header-height))] flex flex-col justify-center items-center text-center p-4 md:p-8 relative overflow-hidden"
      style={{ minHeight: '500px' }} // Ensure a minimum height
    >
      <div className="max-w-3xl">
        <h1 ref={nameRef} className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-foreground opacity-0">
          Your Name
        </h1>
        <p ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-primary opacity-0">
          Software Developer & Creative Thinker
        </p>
        <p ref={taglineRef} className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-10 opacity-0">
          Crafting digital experiences that inspire and engage.
        </p>
        <div ref={buttonRef} className="opacity-0">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all transform hover:scale-105">
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary/80"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-8 w-8" />
      </Button>
    </section>
  );
}
