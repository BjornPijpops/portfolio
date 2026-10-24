import { useContent } from '../../content/ContentContext';
import { sortByMostRecent } from '../../domain';
import { EmployerEntry } from './EmployerEntry';

export function ExperienceTimeline() {
  const employers = sortByMostRecent(useContent().getEmployers());

  return (
    <ol className="timeline">
      {employers.map((employer) => (
        <EmployerEntry key={employer.id} employer={employer} />
      ))}
    </ol>
  );
}
