import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const ProjectsSection = ({ projects }) => (
  <div className="space-y-10">
    <FadeIn>
      <h2 className="text-display-md text-ink">Projects</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <FadeIn key={project.title} delay={index * 150}>
          <div className="p-6 bg-surface border border-line rounded-xl transition-colors duration-300 hover:border-accent/60">
            <h3 className="text-xl font-semibold text-ink">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{project.category}</p>
            <p className="mt-4 text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-bg border border-line rounded-full text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectsSection;
