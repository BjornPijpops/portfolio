import { DEFAULT_LOCALE, type Locale } from './locale';
import type { Period, YearMonth } from './types';

interface DurationLabels {
  present: string;
  years: (count: number) => string;
  months: (count: number) => string;
}

const LABELS: Record<Locale, DurationLabels> = {
  en: {
    present: 'Present',
    years: (n) => `${n} ${n > 1 ? 'yrs' : 'yr'}`,
    months: (n) => `${n} mo`,
  },
  nl: {
    present: 'Heden',
    years: (n) => `${n} jaar`,
    months: (n) => `${n} mnd`,
  },
};

function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number);
  if (!year || !month || month < 1 || month > 12) {
    throw new Error(`Invalid year-month value: "${value}"`);
  }
  return { year, month };
}

function formatYearMonth(value: YearMonth, locale: Locale): string {
  const { year, month } = parseYearMonth(value);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(
    new Date(year, month - 1, 1),
  );
}

/** Months covered by a period, counting both the first and the last month. */
export function periodInMonths(period: Period, now: Date = new Date()): number {
  const start = parseYearMonth(period.start);
  const end = period.end
    ? parseYearMonth(period.end)
    : { year: now.getFullYear(), month: now.getMonth() + 1 };
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

export function formatPeriod(period: Period, locale: Locale = DEFAULT_LOCALE): string {
  const end = period.end ? formatYearMonth(period.end, locale) : LABELS[locale].present;
  return `${formatYearMonth(period.start, locale)} – ${end}`;
}

export function formatDuration(totalMonths: number, locale: Locale = DEFAULT_LOCALE): string {
  const { years, months } = LABELS[locale];
  const wholeYears = Math.floor(totalMonths / 12);
  const remainder = totalMonths % 12;
  const parts = [
    wholeYears > 0 ? years(wholeYears) : '',
    remainder > 0 ? months(remainder) : '',
  ].filter(Boolean);
  return parts.join(' ') || months(0);
}
