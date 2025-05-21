import AnimatedSection from '@/components/ui/AnimatedSection';
import PoemDisplay from '@/components/hobbies/PoemDisplay';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Feather, Camera, Music, Mountain } from 'lucide-react';
import Image from 'next/image';

const poems = [
  {
    title: "Ode to Code",
    stanzas: [
      "Silent screen, a canvas bright,",
      "Fingers dance in pale moonlight.",
      "Logic flows, a structured art,",
      "Crafting worlds, a brand new start.",
    ],
  },
  {
    title: "Whispers of the Wind",
    stanzas: [
      "Through leaves it sighs, a gentle tune,",
      "Beneath the watchful, silver moon.",
      "Secrets old, it carries near,",
      "Dispelling doubt, calming fear.",
    ],
  },
];

const otherHobbies = [
  { 
    name: "Photography", 
    icon: <Camera className="h-10 w-10 text-accent mb-3" />, 
    description: "Capturing moments and perspectives through the lens. I enjoy landscape and street photography.",
    image: "https://placehold.co/400x300.png",
    imageHint: "camera landscape"
  },
  { 
    name: "Playing Guitar", 
    icon: <Music className="h-10 w-10 text-accent mb-3" />, 
    description: "Strumming melodies and exploring different genres. Music is a great way for me to unwind and express creativity.",
    image: "https://placehold.co/400x300.png",
    imageHint: "guitar music"
  },
  { 
    name: "Hiking", 
    icon: <Mountain className="h-10 w-10 text-accent mb-3" />, 
    description: "Exploring nature trails and enjoying the serenity of the great outdoors. It's both a physical and mental refresh.",
    image: "https://placehold.co/400x300.png",
    imageHint: "mountain trail"
  },
];

export default function HobbiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Passions & Pursuits</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Beyond the screen, these are some of the activities that bring me joy and inspiration.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16 md:mb-20">
        <div className="flex items-center justify-center mb-8">
          <Feather className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Poetry Corner</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {poems.map((poem, index) => (
            <PoemDisplay key={index} title={poem.title} stanzas={poem.stanzas} delay={index * 500}/>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Other Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {otherHobbies.map((hobby, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                {hobby.icon}
                <CardTitle className="text-2xl text-accent">{hobby.name}</CardTitle>
              </CardHeader>
              <div className="px-0 pt-0">
                 <Image src={hobby.image} alt={hobby.name} width={400} height={300} className="w-full h-48 object-cover" data-ai-hint={hobby.imageHint} />
              </div>
              <CardContent className="pt-6 flex-grow">
                <p className="text-foreground/80 text-center leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
