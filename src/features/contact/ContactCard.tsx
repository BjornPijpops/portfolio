import { SocialIcon, type IconName } from '../../components/SocialIcon';

export interface ContactMethod {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  isExternal: boolean;
}

export function ContactCard({ method }: { method: ContactMethod }) {
  const externalProps = method.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className="contact-card" href={method.href} {...externalProps}>
      <SocialIcon name={method.icon} />
      <span className="contact-card__text">
        <span className="contact-card__label">{method.label}</span>
        <span className="contact-card__value">{method.value}</span>
      </span>
    </a>
  );
}
