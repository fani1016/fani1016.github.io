import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroBackground} 
          alt="Professional workspace background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Farhan Tariq
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
            Embedded Systems • Linux • Computer Networking
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building robust systems and solving complex technical challenges. 
            Specializing in embedded development, Linux systems, and computer networking solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://github.com/fani1016" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://linkedin.com/in/farhan1016" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              onClick={scrollToContact}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;