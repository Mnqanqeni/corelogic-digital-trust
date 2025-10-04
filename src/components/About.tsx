import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Professional Excellence",
    "Trust & Reliability",
    "Innovation-Driven",
    "Client-Focused Solutions"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">CoreLogic Systems</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              CoreLogic Systems is a leading IT consulting and full-stack development provider, 
              specializing in building reliable, scalable solutions for businesses and communities.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              With expertise spanning web development, custom software, IoT integration, and strategic 
              IT consulting, we empower organizations to thrive in the digital age.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our mission is simple: deliver technology solutions that are not just functional, 
              but transformative—built on trust, innovation, and a commitment to excellence.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Our Core Values</h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
