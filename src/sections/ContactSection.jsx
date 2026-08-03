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
    <div className="space-y-10">
      <FadeIn>
        <h2 className="text-display-md text-ink">Contact</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <FadeIn key={link.text} delay={index * 100}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-surface border border-line rounded-xl transition-colors duration-300 hover:border-accent/60 group"
            >
              <span className="text-muted transition-colors duration-300 group-hover:text-accent">
                {link.icon}
              </span>
              <span className="text-ink transition-colors duration-300 group-hover:text-accent">
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
