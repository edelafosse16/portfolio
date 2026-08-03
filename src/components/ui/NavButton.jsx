import PropTypes from 'prop-types';

const NavButton = ({ section, label, activeSection, onSelect }) => (
  <button
    onClick={() => onSelect(section)}
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
  activeSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default NavButton;
