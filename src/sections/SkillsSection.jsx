import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const skillShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
});

const SkillGroup = ({ title, items, startDelay }) => (
  <div className="space-y-4">
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((skill, index) => (
        <FadeIn key={skill.name} delay={startDelay + index * 100}>
          <div className="p-4 bg-surface border border-line rounded-xl transition-colors duration-300 hover:border-accent/60">
            <h4 className="font-semibold text-ink">{skill.name}</h4>
            {skill.detail && <p className="mt-1 text-sm text-muted">{skill.detail}</p>}
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
  <div className="space-y-10">
    <FadeIn>
      <h2 className="text-display-md text-ink">Skills</h2>
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
