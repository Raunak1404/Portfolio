import HeroSection from '@/components/home/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-16 md:space-y-24 pb-16">
      <HeroSection />
      
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What I Do</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I specialize in creating modern web experiences, focusing on performance, design, and user interaction.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-accent">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">Building responsive and performant websites and applications using cutting-edge technologies.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-accent">UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">Crafting intuitive and engaging user interfaces with a focus on user experience.</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-accent">Creative Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">Developing innovative solutions to complex problems, always aiming for elegance and efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Featured Project Snapshot</h2>
        <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden">
          <Image 
            src="https://placehold.co/800x450.png" 
            alt="Featured Project" 
            width={800} 
            height={450} 
            className="w-full h-auto"
            data-ai-hint="technology project" 
          />
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-accent">Project Title</h3>
            <p className="text-foreground/80">A brief description of a standout project, highlighting key achievements and technologies used. This section gives a glimpse into my practical skills.</p>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
