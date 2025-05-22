
"use client";

import React, { useState, useEffect, Fragment } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Users, Lightbulb, User, Mail, Phone, Linkedin as LinkedinIcon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ResumeItemPoint {
  text: string;
  isListItem?: boolean; // To denote if it should be prefixed with '• '
}

interface ResumeItem {
  title?: string;
  degree?: string;
  company?: string;
  institution?: string;
  date: string;
  details: ResumeItemPoint[]; // Changed from description to details for clarity
}

interface ContactDetails {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface ResumeData { // Exporting for ResumePage
  name: string;
  contact: ContactDetails;
  education: ResumeItem[];
  experience: ResumeItem[];
  leadership: ResumeItem[];
  skills: string[];
}

interface TypingResumeDisplayProps {
  resumeData: ResumeData;
}

const TypingText: React.FC<{ text: string; delay?: number; className?: string; as?: keyof JSX.IntrinsicElements; onFinished?: () => void }> = ({ text, delay = 30, className, as: Component = 'p', onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setShowCursor(true);
  }, [text]);

  useEffect(() => {
    if (!text) {
      setShowCursor(false);
      if (onFinished) onFinished();
      return;
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      if (onFinished) onFinished();
    }
  }, [currentIndex, delay, text, onFinished]);

  return <Component className={className}>{displayedText}{showCursor && <span className="animate-ping opacity-75">|</span>}</Component>;
};


const TypeResumeSection: React.FC<{ items: ResumeItem[]; sectionTitle: string; Icon: React.ElementType; onSectionFinished?: () => void }> = ({ items, sectionTitle, Icon, onSectionFinished }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(-1); // -1 means section title hasn't started
  const [completedItems, setCompletedItems] = useState(0);

  useEffect(() => {
    // Start typing section title
    setCurrentItemIndex(0); 
  }, []);

  const handleItemFinish = () => {
    setCompletedItems(prev => prev + 1);
    if (completedItems + 1 < items.length) {
       setCurrentItemIndex(prev => prev +1);
    } else if (completedItems + 1 === items.length) {
      // All items in this section are done
      if(onSectionFinished) onSectionFinished();
    }
  };
  
  if (items.length === 0 && currentItemIndex === -1) return null;


  return (
    <Card className="shadow-xl mb-8">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="h-8 w-8 text-primary" />
          {currentItemIndex >= 0 ? ( // Type title only when section starts
             <TypingText text={sectionTitle} delay={35} as="h2" className="text-3xl text-accent" />
          ) : (
            <h2 className="text-3xl text-accent">{sectionTitle}</h2> // Show instantly if not animating
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item, index) => (
          <Fragment key={index}>
            {index <= currentItemIndex && (
              <div className="border-l-4 border-primary/50 pl-4">
                <TypingText text={item.title || item.degree || ''} delay={30} as="h3" className="text-xl font-semibold text-foreground/90" />
                <TypingText text={`${item.company || item.institution || ''} | ${item.date}`} delay={30} as="p" className="text-md font-medium text-muted-foreground" />
                {item.details.map((point, pIndex) => (
                  <TypingText key={pIndex} text={point.isListItem ? `• ${point.text}` : point.text} delay={25} as="p" className="text-foreground/80 mt-1 leading-relaxed" onFinished={pIndex === item.details.length -1 ? handleItemFinish : undefined} />
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};


export default function TypingResumeDisplay({ resumeData }: TypingResumeDisplayProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = ['contact', 'education', 'experience', 'leadership', 'skills'];

  const handleSectionFinish = () => {
    setCurrentSectionIndex(prev => prev + 1);
  };

  return (
    <div className="space-y-12">
      {currentSectionIndex >= sections.indexOf('contact') && (
        <Card className="shadow-xl mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <User className="h-8 w-8 text-primary" />
              <TypingText text={resumeData.name} delay={35} as="h2" className="text-3xl text-accent" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2"> <Mail className="h-5 w-5 text-muted-foreground" /> <TypingText text={resumeData.contact.email} /> </div>
            <div className="flex items-center gap-2"> <Phone className="h-5 w-5 text-muted-foreground" /> <TypingText text={resumeData.contact.phone} /> </div>
            <div className="flex items-center gap-2"> <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
              <Link href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">
                   <TypingText text={resumeData.contact.linkedin} as="span" />
              </Link>
            </div>
            <div className="flex items-center gap-2"> <MapPin className="h-5 w-5 text-muted-foreground" /> <TypingText text={resumeData.contact.location} onFinished={handleSectionFinish}/> </div>
          </CardContent>
        </Card>
      )}

      {currentSectionIndex >= sections.indexOf('education') && resumeData.education.length > 0 && (
        <TypeResumeSection items={resumeData.education} sectionTitle="Education" Icon={GraduationCap} onSectionFinished={handleSectionFinish} />
      )}
      {currentSectionIndex >= sections.indexOf('experience') && resumeData.experience.length > 0 && (
        <TypeResumeSection items={resumeData.experience} sectionTitle="Experience" Icon={Briefcase} onSectionFinished={handleSectionFinish} />
      )}
      {currentSectionIndex >= sections.indexOf('leadership') && resumeData.leadership.length > 0 && (
        <TypeResumeSection items={resumeData.leadership} sectionTitle="Leadership & Volunteering" Icon={Users} onSectionFinished={handleSectionFinish} />
      )}

      {currentSectionIndex >= sections.indexOf('skills') && (
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-primary" />
               <TypingText text="Technical Skills & Certifications" delay={35} as="h2" className="text-3xl text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <Button key={index} variant="outline" className="cursor-default bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground pointer-events-none">
                   <TypingText text={skill} delay={20} as="span" onFinished={index === resumeData.skills.length - 1 ? handleSectionFinish : undefined} />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
