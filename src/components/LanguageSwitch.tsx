import { LOCALES } from '../domain';
import { useLocale } from '../i18n/LocaleContext';

export function LanguageSwitch() {
  const { locale, setLocale, messages } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={messages.language.label}>
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          className="lang-switch__button"
          aria-pressed={option === locale}
          aria-label={messages.language.names[option]}
          title={messages.language.names[option]}
          onClick={() => setLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
