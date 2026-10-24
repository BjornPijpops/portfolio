import type { Education } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

// Files may sit in sub-folders and contain spaces: encode each path segment but keep the slashes.
// BASE_URL keeps the link valid when the site is hosted under a sub-path.
const certificateUrl = (file: string) =>
  `${import.meta.env.BASE_URL}certificates/${file.split('/').map(encodeURIComponent).join('/')}`;

export function EducationCard({ item }: { item: Education }) {
  const { messages } = useLocale();

  return (
    <article className={`edu-card edu-card--${item.kind}`}>
      <span className="edu-card__badge">{messages.education.kinds[item.kind]}</span>
      <h3 className="edu-card__title">{item.title}</h3>
      <p className="edu-card__institution">{item.institution}</p>
      {item.certificate && (
        <a
          className="edu-card__link"
          href={certificateUrl(item.certificate)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {messages.education.viewCertificate}
        </a>
      )}
    </article>
  );
}
