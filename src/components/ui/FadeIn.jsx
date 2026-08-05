import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

const EASE = [0.22, 1, 0.36, 1];

// Reveals children once, when they scroll into view, rather than on mount.
// `delay` is in ms to match the old FadeInSection API used across sections.
const FadeIn = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default FadeIn;
