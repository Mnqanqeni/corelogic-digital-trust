import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ridematePreview from "@/assets/ridemate-preview.jpg";
import lafamilyPreview from "@/assets/lafamily-preview.png";

const Portfolio = () => {
  const projects = [
    {
      title: "RideMate - Carpool App",
      description: "A smart platform connecting commuters for safe, affordable, and eco-friendly travel. Features real-time matching, route optimization, and secure payment integration.",
      image: ridematePreview,
      tags: ["Mobile App", "IoT", "Real-time"]
    },
    {
      title: "La Family Tour",
      description: "A digital platform designed for family-oriented travel experiences, showcasing tour packages, bookings, and destination information in a user-friendly interface.",
      image: lafamilyPreview,
      tags: ["Web Platform", "E-commerce", "Booking System"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our commitment to excellence and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
