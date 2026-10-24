import type { Project } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';
import { LivePreview } from './LivePreview';

export function ProjectCard({ project }: { project: Project }) {
  const { messages } = useLocale();
  const t = messages.projects;

  return (
    <article className="card card--project">
      {project.demoUrl && <LivePreview url={project.demoUrl} title={project.title} />}
      <h2 className="card__title">{project.title}</h2>
      <p>{project.description}</p>
      <ul className="links">
        {project.demoUrl && (
          <li>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              {t.liveDemo}
            </a>
          </li>
        )}
        {project.sourceUrl && (
          <li>
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              {t.sourceCode}
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}
