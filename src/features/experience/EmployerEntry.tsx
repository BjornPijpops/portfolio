import { employerAnchorId, employerPeriod, formatPeriod, type Employer } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';
import { RoleItem } from './RoleItem';

export function EmployerEntry({ employer }: { employer: Employer }) {
  const { locale, messages } = useLocale();
  const { consultancy } = employer;

  return (
    <li id={employerAnchorId(employer.id)} className="employer">
      <header className="employer__header">
        <h2 className="employer__name">{employer.name}</h2>
        {consultancy && (
          <p className="employer__consultancy">
            {messages.experience.via}{' '}
            <a href={consultancy.url} target="_blank" rel="noopener noreferrer">
              {consultancy.label}
            </a>
          </p>
        )}
        <p className="employer__meta">
          {employer.industry} · {formatPeriod(employerPeriod(employer), locale)}
        </p>
      </header>
      {employer.roles.map((role) => (
        <RoleItem key={role.period.start} role={role} />
      ))}
    </li>
  );
}
