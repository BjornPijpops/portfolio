import { PageHeader } from '../components/PageHeader';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function ProjectsPage() {
  const { title, intro } = useLocale().messages.projects;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={intro} />
      <ProjectsSection />
    </>
  );
}
