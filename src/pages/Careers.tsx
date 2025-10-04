import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We're looking for an experienced full-stack developer to build innovative web applications and lead technical initiatives.",
  },
  {
    id: 2,
    title: "IoT Solutions Engineer",
    department: "IoT",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Join our IoT team to design and implement smart, connected systems for clients across various industries.",
  },
  {
    id: 3,
    title: "IT Consultant",
    department: "Consulting",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Help businesses optimize their technology strategies and implement effective digital solutions.",
  },
  {
    id: 4,
    title: "Junior Software Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Start your career in software development with mentorship from experienced engineers in a collaborative environment.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Build your career with CoreLogic Systems. We're always looking for talented, 
              passionate individuals to help shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Competitive Salary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Flexible Work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Growth Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Collaborative Culture</span>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {job.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 group whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">Don't see the right role?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always interested in hearing from talented professionals. 
                Send us your resume and tell us how you can contribute to CoreLogic Systems.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
