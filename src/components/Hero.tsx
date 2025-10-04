import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <img src={logo} alt="CoreLogic Systems" className="h-32 md:h-40 w-auto" />
        </div>
        
        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Building digital systems <br className="hidden md:block" />
          <span className="text-primary">you can trust</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          CoreLogic Systems delivers reliable, scalable IT solutions for businesses and communities. 
          We turn your vision into powerful digital experiences.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
