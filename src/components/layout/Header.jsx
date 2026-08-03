import PropTypes from 'prop-types';

const Header = ({ name, title }) => (
  <header className="bg-blue-600 py-6">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <p className="text-xl text-white/90">{title}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
