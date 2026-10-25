import { LOCALES } from '../domain';
import { useLocale } from '../i18n/LocaleContext';
import { SegmentedControl } from './SegmentedControl';

export function LanguageSwitch() {
  const { locale, setLocale, messages } = useLocale();
  const options = LOCALES.map((option) => ({
    value: option,
    label: option.toUpperCase(),
    ariaLabel: messages.language.names[option],
    lang: option,
  }));

  return (
    <SegmentedControl
      options={options}
      value={locale}
      onChange={setLocale}
      groupLabel={messages.language.label}
    />
  );
}
