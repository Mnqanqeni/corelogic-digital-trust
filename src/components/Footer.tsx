import { Linkedin, Github, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter/X" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="CoreLogic Systems" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 leading-relaxed">
              Building digital systems you can trust. Professional IT consulting and development solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/70">
            Copyright © {currentYear} CoreLogic Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
