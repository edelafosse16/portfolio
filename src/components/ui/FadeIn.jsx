import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Fade-and-rise-in wrapper for section content. `delay` (ms) lets sibling
// items stagger in one after another instead of all appearing at once.
const FadeIn = ({ children, delay = 0 }) => {
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

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default FadeIn;
