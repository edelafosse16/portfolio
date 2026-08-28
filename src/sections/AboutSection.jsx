import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';
import DotsMotif from '../components/ui/DotsMotif';

const AboutSection = ({ about }) => (
  <div className="relative">
    <DotsMotif />
    <FadeIn>
      <div className="relative z-10 space-y-6 max-w-2xl">
        <h2 className="text-display-md text-ink">About</h2>
        {about.map((paragraph, index) => (
          <p key={index} className="text-lg text-muted leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </FadeIn>
  </div>
);

AboutSection.propTypes = {
  about: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutSection;
