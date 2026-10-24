import { SocialIcon, type IconName } from '../../components/SocialIcon';

export interface ContactMethod {
  icon: IconName;
  label: string;
  value: string;
  href: string;
}

/** A full-width row linking to an external profile. */
export function ContactCard({ method }: { method: ContactMethod }) {
  return (
    <a className="contact-row" href={method.href} target="_blank" rel="noopener noreferrer">
      <SocialIcon name={method.icon} />
      <span className="contact-row__text">
        <span className="contact-row__label">{method.label}</span>
        <span className="contact-row__value">{method.value}</span>
      </span>
      <span className="contact-row__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
