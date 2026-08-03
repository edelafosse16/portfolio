import PropTypes from 'prop-types';
import NavButton from '../ui/NavButton';

const SECTIONS = [
  { section: 'about', label: 'About' },
  { section: 'projects', label: 'Projects' },
  { section: 'skills', label: 'Skills' },
  { section: 'contact', label: 'Contact' },
];

const Nav = ({ activeSection, onSelect, isScrolled }) => (
  <nav
    className={`bg-white/80 backdrop-blur-md border-b transition-all duration-300 sticky top-20 z-40 ${
      isScrolled ? 'shadow-sm' : ''
    }`}
  >
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="flex gap-4">
        {SECTIONS.map(({ section, label }) => (
          <NavButton
            key={section}
            section={section}
            label={label}
            activeSection={activeSection}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default Nav;
