import type { EducationYearGroup } from '../../domain';
import { EducationCard } from './EducationCard';

/** Full cards grouped under a year heading. */
export function EducationDetailed({ groups }: { groups: readonly EducationYearGroup[] }) {
  return (
    <ol className="edu-timeline">
      {groups.map(({ year, items }) => (
        <li key={year} className="edu-year">
          <h2 className="edu-year__label">{year}</h2>
          <div className="grid">
            {items.map((item) => (
              <EducationCard key={item.title} item={item} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
