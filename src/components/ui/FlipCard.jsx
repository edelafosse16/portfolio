import { useState } from 'react';
import PropTypes from 'prop-types';

// Click-triggered flip card (not hover, so it works on touch). The face
// that isn't showing is marked `inert`, which removes it from tab order
// and the accessibility tree without affecting how the 3D flip renders —
// backface-visibility already handles hiding it visually on its own.
const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggle = () => setIsFlipped((flipped) => !flipped);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
      className="relative [perspective:1200px] cursor-pointer"
    >
      {/* grid stacks both faces in the same cell, so the card sizes itself
          to whichever face is taller instead of clipping the back content */}
      <div
        className="grid transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div
          className="col-start-1 row-start-1 [backface-visibility:hidden]"
          aria-hidden={isFlipped}
          {...(isFlipped ? { inert: '' } : {})}
        >
          {front}
        </div>
        <div
          className="col-start-1 row-start-1 [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
          aria-hidden={!isFlipped}
          {...(!isFlipped ? { inert: '' } : {})}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  front: PropTypes.node.isRequired,
  back: PropTypes.node.isRequired,
};

export default FlipCard;
