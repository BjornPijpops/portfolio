export const LOCALES = ['en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export type Localized<T> = Record<Locale, T>;
/** Content that is either language-neutral (a plain value) or provided per locale. */
export type Localizable<T> = T | Localized<T>;

export function isLocale(value: unknown): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

function isLocalized<T>(value: Localizable<T>): value is Localized<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    LOCALES.every((locale) => locale in value)
  );
}

export function pick<T>(value: Localizable<T>, locale: Locale): T {
  return isLocalized(value) ? value[locale] : value;
}
