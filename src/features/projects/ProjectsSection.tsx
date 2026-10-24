import { useContent } from '../../content/ContentContext';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const projects = useContent().getProjects();

  return (
    <div className="grid grid--projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
