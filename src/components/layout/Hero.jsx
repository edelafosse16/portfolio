import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollCue from '../ui/ScrollCue';

const EASE = [0.22, 1, 0.36, 1];

// Type-led hero, no photo. The only visuals beyond text are two
// heavily-blurred accent shapes, off-center, built entirely in CSS —
// a primary one top-right and a smaller, quieter one bottom-left.
const Hero = ({ name, title, tagline, isScrolled }) => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

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
    <section className="relative min-h-screen-safe flex flex-col justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-[18rem] w-[18rem] rounded-full bg-accent/25 blur-[90px] motion-safe:animate-hero-drift sm:h-[26rem] sm:w-[26rem] md:-right-32 md:-top-32 md:h-[36rem] md:w-[36rem] md:blur-[120px] lg:h-[44rem] lg:w-[44rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -bottom-10 h-[10rem] w-[10rem] rounded-full bg-accent/10 blur-[70px] motion-safe:animate-hero-drift sm:h-[14rem] sm:w-[14rem] md:-left-16 md:-bottom-16 md:h-[20rem] md:w-[20rem] md:blur-[100px] lg:h-[24rem] lg:w-[24rem]"
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
      <ScrollCue visible={!isScrolled} onClick={scrollToContent} />
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default Hero;
