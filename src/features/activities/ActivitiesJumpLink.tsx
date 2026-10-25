import { useLocale } from '../../i18n/LocaleContext';
import { ACTIVITIES_ANCHOR_ID } from './ActivitiesSection';

/** In-page shortcut. A real #hash link would clash with the hash-based router. */
export function ActivitiesJumpLink() {
  const { messages } = useLocale();

  const jump = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document
      .getElementById(ACTIVITIES_ANCHOR_ID)
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button type="button" className="jump-link" onClick={jump}>
      {messages.activities.title} <span aria-hidden="true">↓</span>
    </button>
  );
}
