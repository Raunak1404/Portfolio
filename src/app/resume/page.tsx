
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import TypingResumeDisplay, { type ResumeData } from '@/components/resume/TypingResumeDisplay'; // Import the new component and type

// Updated resume data based on your provided OCR
const resumeDataSource: ResumeData = {
  name: "Raunak Saxena",
  contact: {
    email: "raunak003@e.ntu.edu.sg",
    phone: "+65 84218885",
    linkedin: "linkedin.com/in/raunak-saxena-283a85213",
    location: "Singapore",
  },
  education: [
    {
      degree: "AeroSpace Engineering with a Minor in Computer Science and Data Analytics",
      institution: "Nanyang Technological University, Singapore",
      date: "August 2023 – May 2027",
      details: [
        { text: "Courses: Thermofluids, Dynamics, Mechanics of Materials, Aircraft Structures, Flight Performance, Software Engineering, Object Oriented Programming, Data Structures and Algorithms, Data Science and Artificial Intelligence." },
        { text: "Activities: Indian Society; Google Developer Student Clubs; Mechanical and Aerospace Club; Welfare Services Club.", isListItem: true }
      ]
    }
  ],
  experience: [
    {
      title: "Food Delivery System",
      company: "Personal Project",
      date: "January 2024 – April 2024",
      details: [
        { text: "Developed a food delivery application using Object-Oriented Programming (OOP) principles and Java, ensuring a streamlined and user-friendly ordering experience.", isListItem: true },
        { text: "Built a robust and modular codebase, enhancing scalability and long-term maintainability through OOP best practices.", isListItem: true }
      ]
    },
    {
      title: "OrbitWise",
      company: "Personal Project",
      date: "September 2024 – November 2024",
      details: [
        { text: "Developed OrbitWise, a machine learning-powered tool for predicting exoplanetary orbital periods using models like Linear Regression, Decision Trees, Random Forests, Gradient Boosting, and a Stacking Ensemble.", isListItem: true },
        { text: "Designed for astronomical research, offering a scalable and efficient approach to analyzing exoplanet orbits, aiding in the identification of Earth-like planets.", isListItem: true }
      ]
    },
    {
      title: "MediMap+",
      company: "Personal Project",
      date: "September 2024 – December 2024",
      details: [
        { text: "Developed MediMap+, an all-in-one healthcare platform designed to improve accessibility and support health and wellness in Singapore.", isListItem: true },
        { text: "Integrated key features such as a smart hospital locator with customizable filters, educational resources on First Aid, and an appointment booking system for seamless online and offline scheduling.", isListItem: true }
      ]
    }
  ],
  leadership: [
    {
      title: "Treasurer, Indian Society",
      company: "Indian Society", // Using company field for organization name for consistency
      date: "September 2023 – May 2024",
      details: [
        { text: "Managed financial records as Treasurer of IndSoc Club, ensuring transparency and accountability by tracking incoming and outgoing funds.", isListItem: true },
        { text: "Secured sponsorships and partnerships with businesses to support club initiatives and events, enhancing financial sustainability.", isListItem: true },
        { text: "Collaborated with the executive team to develop budgets and plan community-focused activities, strengthening the club's presence.", isListItem: true }
      ]
    },
    {
      title: "Financial Controller, NTU Welfare Services Club",
      company: "NTU Welfare Services Club",
      date: "September 2024 – Present",
      details: [
        { text: "Managed club finances as Financial Controller of the Welfare Services Club, maintaining accurate records, overseeing fund management, and ensuring financial accountability.", isListItem: true },
        { text: "Collaborated with the executive team to plan and execute events that align with the club's mission and objectives.", isListItem: true },
        { text: "Actively participated in volunteer sessions, engaging with physically challenged individuals to foster meaningful connections and contribute to the community.", isListItem: true }
      ]
    },
    {
      title: "Subcommittee Member, Mechanical and Aerospace Engineering Club",
      company: "Mechanical and Aerospace Engineering Club",
      date: "September 2024 – Present",
      details: [
        { text: "Managed backend operations as a Logistics Subcommittee member in MAE NTU, ensuring smooth execution of school events.", isListItem: true },
        { text: "Coordinated logistics and event operations, addressing challenges during planning and execution.", isListItem: true },
        { text: "Collaborated with the team to facilitate seamless event management and contribute to successful initiatives.", isListItem: true }
      ]
    }
  ],
  skills: [
    "React JS", "C", "Node JS", "C++", "Java", "Python", "Web Development", "SolidWorks (3D modelling)"
  ]
};


export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Resume</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Here's a dynamic look at my professional journey, education, and skills.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
          {/* Replace '/resume.pdf' with the actual path if you upload your PDF */}
          <Link href="/resume-raunak-saxena.pdf" download="RaunakSaxena_Resume.pdf" target="_blank">
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Link>
        </Button>
      </AnimatedSection>

      {/* Render the TypingResumeDisplay component with the resume data */}
      <TypingResumeDisplay resumeData={resumeDataSource} />
      
    </div>
  );
}
