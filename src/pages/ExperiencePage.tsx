import { PageHeader } from '../components/PageHeader';
import { ActivitiesJumpLink } from '../features/activities/ActivitiesJumpLink';
import { ActivitiesSection } from '../features/activities/ActivitiesSection';
import { ExperienceTimeline } from '../features/experience/ExperienceTimeline';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function ExperiencePage() {
  const { title, intro } = useLocale().messages.experience;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={intro} />
      <ActivitiesJumpLink />
      <ExperienceTimeline />
      <ActivitiesSection />
    </>
  );
}
