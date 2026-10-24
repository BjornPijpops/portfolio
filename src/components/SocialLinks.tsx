import { useLocale } from '../i18n/LocaleContext';
import type { SocialLink } from '../domain';
import { SocialIcon } from './SocialIcon';

export function SocialLinks({ links }: { links: readonly SocialLink[] }) {
  const { messages } = useLocale();
  if (links.length === 0) return null;

  return (
    <ul className="social-links" aria-label={messages.socialLabel}>
      {links.map(({ platform, label, url }) => (
        <li key={platform}>
          <a
            className="social-links__item"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <SocialIcon name={platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}
