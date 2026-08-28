import PropTypes from 'prop-types';

const NavButton = ({ section, label, activeSection, onSelect }) => (
  <button
    onClick={() => onSelect(section)}
    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
      activeSection === section
        ? 'bg-accent text-accent-contrast ring-2 ring-inset ring-accent-deep shadow-[0_0_18px_rgba(255,178,56,0.45)]'
        : 'text-muted hover:text-ink'
    }`}
  >
    {label}
  </button>
);

NavButton.propTypes = {
  section: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default NavButton;
