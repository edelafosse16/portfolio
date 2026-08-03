import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Camera, Mail, Github, Linkedin } from 'lucide-react';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // ... (previous personalInfo object remains the same)
  const personalInfo = {
    name: "Eric Delafosse",
    title: "Business Operations Analyst",
    about: [
      "I'm a business analyst who turns operational chaos into measurable wins. In my last role, I've cut incidents by 60%, eliminated 1,100+ hours of manual work through automation, and delivered $1.3M in process improvements. My sweet spot is building self-service frameworks that let teams solve their own problems, like the cohort-targeting tool that saved $250-750K per site-wide incident at FanDuel.",
      "I've worked across Fantasy, Sportsbook, Casino, Racing, Picks, and Faceoff products, which taught me that every operation has its own weird edge cases. I like finding them, fixing them, and writing the playbook so it doesn't happen again.",
      "Before Operations, I was a tax accountant at a small firm, which is where I picked up the habit of triple-checking the numbers before presenting them.",
      "If your team needs someone who can dig into messy operational data, spot the patterns that matter, and build strategic solutions that actually stick, I'd love to help."
    ],
      skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Python", level: "Intermediate" }
    ],
    contact: {
      email: "eric.s.delafosse@gmail.com",
      phone: "[REDACTED]",
      github: "github.com/yourusername",
      linkedin: "linkedin.com/in/eric-delafosse"
    },
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform using React and Node.js",
        technologies: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Weather App",
        description: "Created a weather application using React and OpenWeather API",
        technologies: ["React", "REST API", "Tailwind CSS"]
      }
    ]
  };


  // ... (previous component definitions like FadeInSection remain the same)
  const FadeInSection = ({ children, delay = 0 }) => {
    const [isVisible, setVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
 
    useEffect(() => {
      if (!hasAnimated) {
        const timer = setTimeout(() => {
          setVisible(true);
          setHasAnimated(true);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [delay, hasAnimated]);
 
    return (
      <div
        className={`transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    );
  };
 
  FadeInSection.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number,
  };
 
  FadeInSection.defaultProps = {
    delay: 0,
  };  


  const NavButton = ({ section, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
        activeSection === section
          ? 'bg-blue-600 text-white shadow-lg'
          : 'hover:bg-blue-100 bg-white'
      }`}
    >
      {label}
    </button>
  );
 
  NavButton.propTypes = {
    section: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };  


  const AboutSection = () => (
    <FadeInSection>
      <div className="space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
        {personalInfo.about.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700">{paragraph}</p>
        ))}
      </div>
    </FadeInSection>
  );


  const SkillsSection = () => (
    <div className="space-y-6 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold text-green-900">Skills</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalInfo.skills.map((skill, index) => (
          <FadeInSection key={skill.name} delay={index * 100}>
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="font-semibold text-green-800">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );


  const ProjectsSection = () => (
    <div className="space-y-6 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold text-orange-900">Projects</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personalInfo.projects.map((project, index) => (
          <FadeInSection key={project.title} delay={index * 200}>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-orange-800">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm transition-colors duration-300 hover:bg-orange-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );


  const ContactSection = () => (
    <div className="space-y-6 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
      <FadeInSection>
        <h2 className="text-3xl font-bold text-purple-900">Contact</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: <Mail size={20} />, text: personalInfo.contact.email, href: `mailto:${personalInfo.contact.email}` },
          { icon: <Camera size={20} />, text: personalInfo.contact.phone, href: `tel:${personalInfo.contact.phone}` },
          { icon: <Github size={20} />, text: personalInfo.contact.github, href: `https://${personalInfo.contact.github}` },
          { icon: <Linkedin size={20} />, text: personalInfo.contact.linkedin, href: `https://${personalInfo.contact.linkedin}` }
        ].map((contact, index) => (
          <FadeInSection key={contact.text} delay={index * 100}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <span className="transition-transform duration-300 group-hover:rotate-12 text-purple-600">
                {contact.icon}
              </span>
              <span className="transition-colors duration-300 group-hover:text-purple-600">
                {contact.text}
              </span>
            </a>
          </FadeInSection>
        ))}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with gradient background */}
      <header className="bg-blue-600 py-6">
  <div className="max-w-5xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-white">{personalInfo.name}</h1>
    <p className="text-xl text-white/90">{personalInfo.title}</p>
  </div>
</header>


      {/* Navigation with translucent background */}
      <nav className={`bg-white/80 backdrop-blur-md border-b transition-all duration-300 sticky top-20 z-40 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <NavButton section="about" label="About" />
            <NavButton section="projects" label="Projects" />
            <NavButton section="skills" label="Skills" />
            <NavButton section="contact" label="Contact" />
          </div>
        </div>
      </nav>


      {/* Main Content with spacing between sections */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  );
};


export default Portfolio;
