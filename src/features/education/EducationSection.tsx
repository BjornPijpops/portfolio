import { useMemo } from 'react';
import { useContent } from '../../content/ContentContext';
import { groupByYear } from '../../domain';
import { EducationCard } from './EducationCard';

export function EducationSection() {
  const items = useContent().getEducation();
  const groups = useMemo(() => groupByYear(items), [items]);

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
