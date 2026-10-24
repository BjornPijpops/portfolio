import { useContent } from '../../content/ContentContext';
import { displayUrl } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';
import { ContactCard, type ContactMethod } from './ContactCard';

export function ContactMethods() {
  const { email, links } = useContent().getProfile();
  const { messages } = useLocale();

  const methods: ContactMethod[] = [
    {
      icon: 'email',
      label: messages.contact.email,
      value: email,
      href: `mailto:${email}`,
      isExternal: false,
    },
    ...links.map((link) => ({
      icon: link.platform,
      label: link.label,
      value: displayUrl(link.url),
      href: link.url,
      isExternal: true,
    })),
  ];

  return (
    <div className="contact-grid">
      {methods.map((method) => (
        <ContactCard key={method.href} method={method} />
      ))}
    </div>
  );
}
