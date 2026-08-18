import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import personalInfo from './data/personalInfo';
import useScrolled from './hooks/useScrolled';
import Hero from './components/layout/Hero';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

const EASE = [0.22, 1, 0.36, 1];

const sectionComponents = {
  about: <AboutSection about={personalInfo.about} />,
  skills: <SkillsSection skills={personalInfo.skills} />,
  projects: <ProjectsSection projects={personalInfo.projects} />,
  contact: <ContactSection contact={personalInfo.contact} />,
};

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const isScrolled = useScrolled();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-bg">
      <Hero name={personalInfo.name} title={personalInfo.title} tagline={personalInfo.tagline} />
      <Nav activeSection={activeSection} onSelect={setActiveSection} isScrolled={isScrolled} />
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {sectionComponents[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer name={personalInfo.name} />
    </div>
  );
}

export default App;
