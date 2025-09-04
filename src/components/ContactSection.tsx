import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "your.email@example.com",
      action: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Available for remote work",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card border-border/50">
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.description}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  I'd love to hear about your project and discuss how we can work together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;