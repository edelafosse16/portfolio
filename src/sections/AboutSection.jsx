import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const AboutSection = ({ about }) => (
  <FadeIn>
    <div className="space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
      {about.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700">{paragraph}</p>
      ))}
    </div>
  </FadeIn>
);

AboutSection.propTypes = {
  about: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutSection;
