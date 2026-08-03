import PropTypes from 'prop-types';
import { Mail, Github, Linkedin } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

const ContactSection = ({ contact }) => {
  const links = [
    { icon: <Mail size={20} />, text: contact.email, href: `mailto:${contact.email}` },
    { icon: <Github size={20} />, text: contact.github, href: `https://${contact.github}` },
    { icon: <Linkedin size={20} />, text: contact.linkedin, href: `https://${contact.linkedin}` },
  ];

  return (
    <div className="space-y-6 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
      <FadeIn>
        <h2 className="text-3xl font-bold text-purple-900">Contact</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <FadeIn key={link.text} delay={index * 100}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <span className="transition-transform duration-300 group-hover:rotate-12 text-purple-600">
                {link.icon}
              </span>
              <span className="transition-colors duration-300 group-hover:text-purple-600">
                {link.text}
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

ContactSection.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactSection;
