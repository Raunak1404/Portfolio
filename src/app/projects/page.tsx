import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online shopping',
    tags: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website, built with vanilla HTML, CSS, and JavaScript, showcasing early web development skills.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'personal website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Anime.js'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application helping teams organize, track, and manage their work efficiently.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity tool',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard providing real-time weather information for multiple locations using a third-party API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast',
    tags: ['Vue.js', 'OpenWeatherMap API', 'Chart.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Projects</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          A selection of projects that demonstrate my skills and passion for development.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 100} className="h-full">
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="rounded-t-lg object-cover aspect-[3/2]"
                  data-ai-hint={project.imageHint} 
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl mb-3 text-accent">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 mb-4 leading-relaxed min-h-[6em]">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <div className="flex justify-start space-x-3">
                  {project.liveUrl && (
                    <Button variant="outline" asChild className="hover:bg-accent/10 hover:text-accent">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="ghost" asChild className="hover:bg-foreground/10">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
