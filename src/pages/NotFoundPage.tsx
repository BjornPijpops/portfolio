import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLocale } from '../i18n/LocaleContext';

export function NotFoundPage() {
  const { title, body, back } = useLocale().messages.notFound;
  useDocumentTitle(title);

  return (
    <>
      <PageHeader title={title} intro={body} />
      <Link to="/" className="button button--primary">
        {back}
      </Link>
    </>
  );
}
