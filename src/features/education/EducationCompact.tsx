import { certificateUrl } from '../../content/assets';
import type { EducationYearGroup } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

/** Dense overview: one line per item, grouped under a year heading. */
export function EducationCompact({ groups }: { groups: readonly EducationYearGroup[] }) {
  const { messages } = useLocale();

  return (
    <div className="edu-compact">
      {groups.map(({ year, items }) => (
        <section key={year} className="edu-compact__group">
          <h2 className="edu-year__label">{year}</h2>
          <ul className="edu-compact__list">
            {items.map((item) => (
              <li key={item.title} className={`edu-row edu-row--${item.kind}`}>
                <span className="edu-row__main">
                  <span className="edu-row__title">{item.title}</span>
                  <span className="edu-row__institution">{item.institution}</span>
                </span>
                <span className="edu-row__kind">{messages.education.kinds[item.kind]}</span>
                {item.certificate && (
                  <a
                    className="edu-row__link"
                    href={certificateUrl(item.certificate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${messages.education.viewCertificate} ${item.title}`}
                  >
                    {messages.education.certificateShort}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
