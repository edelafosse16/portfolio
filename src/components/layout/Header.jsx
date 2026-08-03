import PropTypes from 'prop-types';

const Header = ({ name, title }) => (
  <header className="pt-20 pb-12 md:pt-28 md:pb-16">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-display-lg text-ink">{name}</h1>
      <p className="mt-3 text-lg md:text-xl text-muted tracking-wide">{title}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
