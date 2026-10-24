import { useContent } from '../../content/ContentContext';
import { careerStats } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

interface StatProps {
  value: number;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="stat">
      <dt className="stat__label">{label}</dt>
      <dd className="stat__value">{value}</dd>
    </div>
  );
}

export function CareerStats() {
  const { getEmployers, getEducation } = useContent();
  const { messages } = useLocale();
  const stats = careerStats(getEmployers(), getEducation());
  const labels = messages.career.stats;

  return (
    <dl className="stats">
      <Stat value={Math.floor(stats.totalMonths / 12)} label={labels.experience} />
      <Stat value={stats.employers} label={labels.employers} />
      <Stat value={stats.consultancies} label={labels.consultancies} />
      <Stat value={stats.certifications} label={labels.certifications} />
    </dl>
  );
}
