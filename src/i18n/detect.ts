import { DEFAULT_LOCALE, isLocale, type Locale } from '../domain';

/** A saved choice wins; otherwise follow the browser language, falling back to the default. */
export function resolveInitialLocale(stored: string | null, browserLanguage?: string): Locale {
  if (isLocale(stored)) return stored;
  const preferred = browserLanguage?.slice(0, 2).toLowerCase();
  return isLocale(preferred) ? preferred : DEFAULT_LOCALE;
}
