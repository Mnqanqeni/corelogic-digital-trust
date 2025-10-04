import { Code, Cog, Cpu, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience."
    },
    {
      icon: Cog,
      title: "Custom Software",
      description: "Tailored software solutions designed to solve your unique business challenges and streamline your operations."
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Smart, connected systems that leverage IoT technology to automate processes and provide valuable insights."
    },
    {
      icon: TrendingUp,
      title: "IT Consulting",
      description: "Expert strategic advice to optimize your technology infrastructure and drive digital transformation."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
