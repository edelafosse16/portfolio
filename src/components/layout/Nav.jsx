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
    className={`bg-bg border-b border-line transition-shadow duration-300 sticky top-0 z-40 ${
      isScrolled ? 'shadow-[0_1px_0_0_theme(colors.line)]' : ''
    }`}
  >
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="flex gap-2">
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
