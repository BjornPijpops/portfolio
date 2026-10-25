import { Photo } from '../../components/Photo';
import { TagList } from '../../components/TagList';
import { formatDuration, formatYears, periodInMonths, type Activity } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

export function ActivityCard({ activity }: { activity: Activity }) {
  const { locale, messages } = useLocale();
  // Calculated from today's date, so ongoing activities keep growing without edits.
  const duration = formatDuration(periodInMonths(activity.period), locale);

  return (
    <article className="card activity">
      {activity.photo && <Photo photo={activity.photo} className="activity__photo" />}
      <h3 className="activity__title">{activity.title}</h3>
      <p className="activity__meta">
        {activity.organization} · {formatYears(activity.period, locale)} · {duration}
      </p>
      <p>{activity.description}</p>
      {activity.topics && <TagList tags={activity.topics} label={messages.activities.topics} />}
    </article>
  );
}
