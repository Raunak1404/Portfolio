import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const resumeData = {
  experience: [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      date: "2022 - Present",
      description: "Developed and maintained web applications using React, Node.js, and Python. Collaborated with cross-functional teams to deliver high-quality software products."
    },
    {
      title: "Junior Developer Intern",
      company: "Innovatech Ltd.",
      date: "Summer 2021",
      description: "Assisted senior developers in coding, testing, and debugging software. Gained experience in Agile methodologies and version control systems."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      date: "2018 - 2022",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management. Graduated with honors."
    }
  ],
  skills: [
    "JavaScript (ES6+)", "React", "Next.js", "Node.js", "Express.js", "Python", "Django",
    "HTML5", "CSS3", "Tailwind CSS", "SQL", "MongoDB", "Git", "Docker", "AWS"
  ]
};


export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Resume</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          A summary of my professional experience, education, and skills.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
          {/* Replace '#' with the actual path to your PDF resume */}
          <Link href="/resume.pdf" download="YourName_Resume.pdf" target="_blank">
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection className="space-y-12">
        {/* Experience Section */}
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl text-accent">Experience</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="border-l-4 border-primary/50 pl-4">
                <h3 className="text-xl font-semibold text-foreground/90">{job.title}</h3>
                <p className="text-md font-medium text-muted-foreground">{job.company} | {job.date}</p>
                <p className="text-foreground/80 mt-1 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="shadow-xl">
          <CardHeader>
             <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl text-accent">Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary/50 pl-4">
                <h3 className="text-xl font-semibold text-foreground/90">{edu.degree}</h3>
                <p className="text-md font-medium text-muted-foreground">{edu.institution} | {edu.date}</p>
                <p className="text-foreground/80 mt-1 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl text-accent">Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <Button key={index} variant="outline" className="cursor-default bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground pointer-events-none">
                  {skill}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
