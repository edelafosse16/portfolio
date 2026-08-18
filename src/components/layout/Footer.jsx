import PropTypes from 'prop-types';
import { useReducedMotion } from 'framer-motion';

const Footer = ({ name }) => {
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 text-sm text-muted">
        <p>
          {name} &copy; {year}
        </p>
        <button
          onClick={scrollToTop}
          className="transition-colors duration-300 hover:text-accent"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Footer;
