import { PageHeader } from '../components/PageHeader';
import { EducationSection } from '../features/education/EducationSection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function EducationPage() {
  const { title, intro } = useLocale().messages.education;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={intro} />
      <EducationSection />
    </>
  );
}
