import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';
import FlipCard from '../components/ui/FlipCard';
import NetworkMotif from '../components/ui/NetworkMotif';

const ProjectsSection = ({ projects }) => (
  <div className="relative">
    <NetworkMotif />
    <div className="relative z-10 space-y-10">
      <FadeIn>
        <h2 className="text-display-md text-ink">Projects</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 150}>
            <FlipCard
              front={
                <div className="p-6 bg-surface border border-line rounded-xl">
                  <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{project.category}</p>
                  <p className="mt-4 text-muted">{project.outcome}</p>
                  <p className="mt-6 text-xs text-accent">Tap for details →</p>
                </div>
              }
              back={
                <div className="p-6 bg-surface border border-accent/40 rounded-xl">
                  <h3 className="text-xl font-semibold text-ink">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-3 text-muted">{project.description}</p>
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
                  <p className="mt-6 text-xs text-accent">← Back</p>
                </div>
              }
            />
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      outcome: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectsSection;
