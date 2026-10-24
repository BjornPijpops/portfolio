import { SocialIcon } from '../../components/SocialIcon';
import { useContent } from '../../content/ContentContext';
import { displayUrl } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';
import { ContactCard, type ContactMethod } from './ContactCard';

export function ContactMethods() {
  const { email, links } = useContent().getProfile();
  const { messages } = useLocale();

  const profiles: ContactMethod[] = links.map((link) => ({
    icon: link.platform,
    label: link.label,
    value: displayUrl(link.url),
    href: link.url,
  }));

  return (
    <div className="contact">
      <section className="contact-primary">
        <SocialIcon name="email" />
        <div className="contact-primary__text">
          <p className="contact-row__label">{messages.contact.email}</p>
          <a className="contact-primary__email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <a className="button button--primary" href={`mailto:${email}`}>
          {messages.contact.sendEmail}
        </a>
      </section>

      <h2 className="contact__subtitle">{messages.contact.elsewhere}</h2>
      <div className="contact-list">
        {profiles.map((method) => (
          <ContactCard key={method.href} method={method} />
        ))}
      </div>
    </div>
  );
}
