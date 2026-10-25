import { useContent } from '../../content/ContentContext';
import { useLocale } from '../../i18n/LocaleContext';
import { ActivityCard } from './ActivityCard';

export const ACTIVITIES_ANCHOR_ID = 'beyond-the-day-job';

/** Side activities, shown after the career timeline so they add to the story without being part of it. */
export function ActivitiesSection() {
  const activities = useContent().getActivities();
  const { title, intro } = useLocale().messages.activities;

  return (
    <section id={ACTIVITIES_ANCHOR_ID} className="activities" aria-labelledby="activities-title">
      <h2 id="activities-title" className="activities__title">
        {title}
      </h2>
      <p className="activities__intro">{intro}</p>
      <div className="grid grid--activities">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}
