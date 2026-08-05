import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// Type-led hero, no photo. The only visual beyond text is a single
// heavily-blurred accent shape, off-center, built entirely in CSS.
const Hero = ({ name, title, tagline }) => {
  const prefersReducedMotion = useReducedMotion();

  // Each line reveals on its own explicit delay, staggered so the whole
  // sequence finishes well under a second.
  const reveal = (index) => ({
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0.2 : 0.5,
      delay: prefersReducedMotion ? 0 : 0.1 + index * 0.12,
      ease: EASE,
    },
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-accent/25 blur-[120px] motion-safe:animate-hero-drift md:h-[44rem] md:w-[44rem]"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.h1 {...reveal(0)} className="text-display-xl text-ink">
          {name}
        </motion.h1>
        <motion.p {...reveal(1)} className="mt-4 text-lg md:text-xl text-muted tracking-wide">
          {title}
        </motion.p>
        <motion.p {...reveal(2)} className="mt-2 text-base md:text-lg text-muted max-w-xl">
          {tagline}
        </motion.p>
      </div>
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default Hero;
