import { describe, expect, it } from 'vitest';
import { formatDuration, formatPeriod, periodInMonths } from './period';

describe('periodInMonths', () => {
  it('counts both the first and last month', () => {
    expect(periodInMonths({ start: '2020-05', end: '2020-05' })).toBe(1);
    expect(periodInMonths({ start: '2020-05', end: '2021-10' })).toBe(18);
  });

  it('uses the supplied date for ongoing periods', () => {
    expect(periodInMonths({ start: '2025-05' }, new Date(2026, 4, 1))).toBe(13);
  });

  it('rejects malformed values', () => {
    expect(() => periodInMonths({ start: '2020-13' })).toThrow();
  });
});

describe('formatPeriod', () => {
  it('shows "Present" for open periods', () => {
    expect(formatPeriod({ start: '2025-05' })).toBe('May 2025 – Present');
    expect(formatPeriod({ start: '2019-08', end: '2020-05' })).toBe('Aug 2019 – May 2020');
  });
});

describe('formatPeriod (nl)', () => {
  it('uses Dutch month names and labels', () => {
    expect(formatPeriod({ start: '2025-05' }, 'nl')).toBe('mei 2025 – Heden');
  });
});

describe('formatDuration', () => {
  it.each([
    [0, '0 mo'],
    [5, '5 mo'],
    [12, '1 yr'],
    [14, '1 yr 2 mo'],
    [36, '3 yrs'],
  ])('formats %i months as "%s"', (months, expected) => {
    expect(formatDuration(months)).toBe(expected);
  });
});

describe('formatDuration (nl)', () => {
  it('uses Dutch units', () => {
    expect(formatDuration(14, 'nl')).toBe('1 jaar 2 mnd');
  });
});
