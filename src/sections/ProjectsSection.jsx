import PropTypes from 'prop-types';
import FadeIn from '../components/ui/FadeIn';

const ProjectsSection = ({ projects }) => (
  <div className="space-y-6 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
    <FadeIn>
      <h2 className="text-3xl font-bold text-orange-900">Projects</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <FadeIn key={project.title} delay={index * 200}>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-orange-800">{project.title}</h3>
            <p className="text-sm text-orange-600 mb-2">{project.category}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm transition-colors duration-300 hover:bg-orange-200"
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
    })
  ).isRequired,
};

export default ProjectsSection;
