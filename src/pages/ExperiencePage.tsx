import { PageHeader } from '../components/PageHeader';
import { ExperienceTimeline } from '../features/experience/ExperienceTimeline';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function ExperiencePage() {
  const { title, intro } = useLocale().messages.experience;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={intro} />
      <ExperienceTimeline />
    </>
  );
}
