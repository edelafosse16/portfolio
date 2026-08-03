import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const skillShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
});

const SkillGroup = ({ title, items, startDelay }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-green-800">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((skill, index) => (
        <FadeIn key={skill.name} delay={startDelay + index * 100}>
          <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="font-semibold text-green-800">{skill.name}</h4>
            {skill.detail && <p className="text-gray-600">{skill.detail}</p>}
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

SkillGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(skillShape).isRequired,
  startDelay: PropTypes.number.isRequired,
};

const SkillsSection = ({ skills }) => (
  <div className="space-y-8 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
    <FadeIn>
      <h2 className="text-3xl font-bold text-green-900">Skills</h2>
    </FadeIn>
    <SkillGroup title="Core toolkit" items={skills.core} startDelay={0} />
    <SkillGroup title="Currently learning" items={skills.learning} startDelay={skills.core.length * 100} />
  </div>
);

SkillsSection.propTypes = {
  skills: PropTypes.shape({
    core: PropTypes.arrayOf(skillShape).isRequired,
    learning: PropTypes.arrayOf(skillShape).isRequired,
  }).isRequired,
};

export default SkillsSection;
