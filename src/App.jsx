import { useState } from 'react';
import personalInfo from './data/personalInfo';
import useScrolled from './hooks/useScrolled';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const isScrolled = useScrolled();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header name={personalInfo.name} title={personalInfo.title} />
      <Nav activeSection={activeSection} onSelect={setActiveSection} isScrolled={isScrolled} />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {activeSection === 'about' && <AboutSection about={personalInfo.about} />}
        {activeSection === 'skills' && <SkillsSection skills={personalInfo.skills} />}
        {activeSection === 'projects' && <ProjectsSection projects={personalInfo.projects} />}
        {activeSection === 'contact' && <ContactSection contact={personalInfo.contact} />}
      </main>
    </div>
  );
}

export default App;
