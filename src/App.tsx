import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SocialRail } from './components/SocialRail';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { AnimeMotionShowcase } from './components/AnimeMotionShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { ContactModal } from './components/ContactModal';
import { Project, Service } from './types';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-purple-600 selection:text-white transition-colors duration-300 relative">
      {/* Vertical Social Rail matching reference */}
      <SocialRail />

      {/* Navigation Header */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          lang={lang}
        />

        {/* 4-Metric Proof Strip */}
        <StatsStrip lang={lang} />

        {/* About Me Section */}
        <AboutSection
          onOpenContact={() => setIsContactOpen(true)}
          lang={lang}
        />

        {/* Anime & Kinetic Motion Transitions Lab */}
        <AnimeMotionShowcase lang={lang} />

        {/* Services & Capabilities */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          lang={lang}
        />

        {/* Featured Projects Bento Grid */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          lang={lang}
        />

        {/* Professional Experience */}
        <ExperienceSection lang={lang} />

        {/* Client Testimonials */}
        <TestimonialsSection lang={lang} />

        {/* Contact Banner */}
        <ContactSection
          onOpenContact={() => setIsContactOpen(true)}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
        lang={lang}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => setIsContactOpen(true)}
        lang={lang}
      />
    </div>
  );
}
