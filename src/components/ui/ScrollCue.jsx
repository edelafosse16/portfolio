import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';

// Small "there's more below" affordance in the hero's bottom-right corner.
// Fades out once the user starts scrolling, reappears if they scroll back
// to the top. Clicking it scrolls down to reveal the nav/content below.
const ScrollCue = ({ visible, onClick }) => (
  <button
    onClick={onClick}
    aria-label="Scroll down"
    tabIndex={visible ? 0 : -1}
    aria-hidden={!visible}
    className={`absolute bottom-6 right-6 md:bottom-10 md:right-10 text-ink transition-opacity duration-700 motion-safe:animate-scroll-cue-bounce ${
      visible ? 'opacity-60 hover:opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <ChevronDown size={32} strokeWidth={3} />
  </button>
);

ScrollCue.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ScrollCue;
