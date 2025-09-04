import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Network, Terminal, Code, Wrench, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Low-level programming and hardware integration",
      skills: ["ARM Cortex-M", "RTOS", "Device Drivers", "I2C/SPI/UART", "Firmware Development", "IoT Protocols"]
    },
    {
      icon: Network,
      title: "Computer Networking",
      description: "Network protocols and infrastructure",
      skills: ["TCP/IP", "Network Security", "Routing Protocols", "SDN", "VPN", "Load Balancing"]
    },
    {
      icon: Terminal,
      title: "Linux Development",
      description: "System programming and administration",
      skills: ["Kernel Modules", "System Programming", "Shell Scripting", "DevOps", "Containerization", "Process Management"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Multi-language proficiency",
      skills: ["C/C++", "Python", "Rust", "Assembly", "JavaScript", "Go"]
    },
    {
      icon: Wrench,
      title: "Development Tools",
      description: "Professional development workflow",
      skills: ["Git/GitHub", "GDB", "Valgrind", "Docker", "Jenkins", "CMake"]
    },
    {
      icon: Database,
      title: "Systems & Databases",
      description: "Data management and system design",
      skills: ["PostgreSQL", "Redis", "MongoDB", "System Architecture", "Performance Optimization", "Distributed Systems"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning embedded systems, networking, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;