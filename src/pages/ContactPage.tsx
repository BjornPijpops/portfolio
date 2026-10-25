import { PageHeader } from '../components/PageHeader';
import { ContactMethods } from '../features/contact/ContactMethods';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function ContactPage() {
  const { title, intro } = useLocale().messages.contact;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={intro} centered />
      <ContactMethods />
    </>
  );
}
