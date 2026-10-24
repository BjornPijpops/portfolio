import { Link } from 'react-router-dom';
import { useContent } from '../../content/ContentContext';
import { careerSegments, formatPeriod } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

/** A bar where each employer's width is proportional to the time spent there. */
export function CareerTimeline() {
  const { getEmployers } = useContent();
  const { locale, messages } = useLocale();
  const segments = careerSegments(getEmployers());

  return (
    <section className="career" aria-labelledby="career-title">
      <h2 id="career-title" className="career__title">
        {messages.career.timelineTitle}
      </h2>
      <ol className="career__bar" aria-label={messages.career.timelineLabel}>
        {segments.map((segment, index) => (
          <li key={segment.id} className="career__segment" style={{ flexGrow: segment.months }}>
            <Link
              to="/experience"
              state={{ employerId: segment.id }}
              className="career__link"
              data-tone={index % 3}
              title={`${segment.name} · ${formatPeriod(segment.period, locale)}`}
            >
              <span className="career__name">{segment.name}</span>
              <span className="career__period">{formatPeriod(segment.period, locale)}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
