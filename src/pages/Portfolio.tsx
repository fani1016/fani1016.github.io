import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;