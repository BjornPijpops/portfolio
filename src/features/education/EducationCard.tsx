import { certificateUrl } from '../../content/assets';
import type { Education } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

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
