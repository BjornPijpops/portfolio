import { BulletList } from '../../components/BulletList';
import { TagList } from '../../components/TagList';
import { formatDuration, formatPeriod, periodInMonths, type Role } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

/** A collapsible role. The current job starts expanded, earlier ones collapsed. */
export function RoleItem({ role }: { role: Role }) {
  const { locale, messages } = useLocale();
  const t = messages.experience;
  const isOngoing = role.period.end === undefined;

  return (
    <details className="role" open={isOngoing}>
      <summary className="role__summary">
        <h3 className="role__title">{role.title}</h3>
        <span className="role__period">
          {formatPeriod(role.period, locale)} ·{' '}
          {formatDuration(periodInMonths(role.period), locale)}
        </span>
      </summary>
      <div className="role__body">
        <p className="role__context">{role.context}</p>
        <BulletList heading={t.whatIDid} items={role.responsibilities} />
        <BulletList heading={t.results} items={role.results} />
        <TagList tags={role.technologies} label={t.technologies} />
      </div>
    </details>
  );
}
