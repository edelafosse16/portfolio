import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const SkillsSection = ({ skills }) => (
  <div className="space-y-6 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
    <FadeIn>
      <h2 className="text-3xl font-bold text-green-900">Skills</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <FadeIn key={skill.name} delay={index * 100}>
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="font-semibold text-green-800">{skill.name}</h3>
            <p className="text-gray-600">{skill.level}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsSection;
