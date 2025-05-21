"use client";

import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border/50 py-8 text-center text-muted-foreground relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Powered by Next.js & Firebase. Designed with <span className="text-red-500">❤️</span>.
        </p>
      </div>
    </footer>
  );
}
