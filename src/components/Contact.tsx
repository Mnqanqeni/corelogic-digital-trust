import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about your services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@corelogicsystems.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@corelogicsystems.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">
                      Chat with us directly for quick responses
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Open WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
