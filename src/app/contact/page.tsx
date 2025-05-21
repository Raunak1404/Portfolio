import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <AnimatedSection className="space-y-8">
          <h2 className="text-3xl font-semibold mb-6 text-accent">Contact Information</h2>
          <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-foreground/90">Email</h3>
              <a href="mailto:your.email@example.com" className="text-lg text-foreground/80 hover:text-accent transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Phone className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-foreground/90">Phone</h3>
              <p className="text-lg text-foreground/80">(Optional: +1 234 567 8900)</p>
            </div>
          </div>
           <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-foreground/90">Location</h3>
              <p className="text-lg text-foreground/80">City, Country (e.g., San Francisco, USA)</p>
              <p className="text-sm text-muted-foreground">Open to remote opportunities.</p>
            </div>
          </div>

          <div className="pt-6">
             <h3 className="text-2xl font-semibold mb-4 text-accent">Connect with me</h3>
             <div className="flex space-x-6">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors transform hover:scale-110" />
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors transform hover:scale-110" />
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors transform hover:scale-110" />
                </Link>
             </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
