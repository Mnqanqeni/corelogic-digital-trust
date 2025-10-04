import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CoreLogic Systems transformed our digital infrastructure. Their expertise and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechVentures Inc."
    },
    {
      quote: "The custom software solution they developed streamlined our operations and saved us countless hours. Highly recommended!",
      author: "Michael Chen",
      role: "Operations Manager, GlobalTrade Co."
    },
    {
      quote: "Outstanding IoT integration that brought our smart city initiative to life. True innovators in their field.",
      author: "Dr. Amanda Rodriguez",
      role: "Director, Smart Cities Alliance"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses and organizations worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
