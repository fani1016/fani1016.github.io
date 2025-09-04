import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "IoT Sensor Network",
      description: "Distributed sensor network using ARM Cortex-M microcontrollers with LoRaWAN connectivity for environmental monitoring. Implemented custom firmware with power management and real-time data processing.",
      technologies: ["C/C++", "ARM Cortex-M", "LoRaWAN", "FreeRTOS", "I2C/SPI"],
      category: "Embedded Systems",
      githubUrl: "https://github.com/yourusername/iot-sensor-network"
    },
    {
      title: "Network Traffic Analyzer",
      description: "High-performance packet analysis tool for real-time network monitoring. Features deep packet inspection, protocol analysis, and custom rule engine for security threat detection.",
      technologies: ["C++", "Linux", "libpcap", "Python", "TCP/IP"],
      category: "Networking",
      githubUrl: "https://github.com/yourusername/network-traffic-analyzer"
    },
    {
      title: "Linux System Monitor",
      description: "Comprehensive system monitoring solution with kernel module integration. Provides real-time metrics, process tracking, and automated alerting with minimal system overhead.",
      technologies: ["C", "Linux Kernel", "Shell Scripting", "Python", "systemd"],
      category: "Linux Development",
      githubUrl: "https://github.com/yourusername/linux-system-monitor"
    },
    {
      title: "Embedded Bootloader",
      description: "Secure bootloader implementation for ARM-based devices with OTA update capability. Features cryptographic verification, fail-safe recovery, and memory-efficient design.",
      technologies: ["C", "ARM Assembly", "Cryptography", "Flash Memory", "UART"],
      category: "Embedded Systems",
      githubUrl: "https://github.com/yourusername/embedded-bootloader"
    },
    {
      title: "SDN Controller",
      description: "Software-defined networking controller implementing OpenFlow protocol. Provides centralized network management with dynamic traffic routing and policy enforcement.",
      technologies: ["Python", "OpenFlow", "REST APIs", "Linux", "Docker"],
      category: "Networking",
      githubUrl: "https://github.com/yourusername/sdn-controller"
    },
    {
      title: "Real-time Data Pipeline",
      description: "High-throughput data processing pipeline for industrial IoT applications. Handles sensor data ingestion, processing, and storage with sub-millisecond latency requirements.",
      technologies: ["Rust", "Redis", "PostgreSQL", "Docker", "Linux"],
      category: "Systems",
      githubUrl: "https://github.com/yourusername/realtime-data-pipeline"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Embedded Systems": return "bg-primary text-primary-foreground";
      case "Networking": return "bg-tech-green text-tech-green-foreground";
      case "Linux Development": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing expertise in embedded systems, networking, and Linux development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(project.category)} variant="secondary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;