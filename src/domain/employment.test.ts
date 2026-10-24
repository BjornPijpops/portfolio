import { describe, expect, it } from 'vitest';
import { employerPeriod, sortByMostRecent, totalExperienceMonths } from './employment';
import type { Employer, Period } from './types';

const employer = (id: string, ...periods: Period[]): Employer => ({
  id,
  name: id,
  industry: 'test',
  roles: periods.map((period) => ({
    title: 't',
    period,
    context: '',
    responsibilities: [],
    results: [],
    technologies: [],
  })),
});

describe('employerPeriod', () => {
  it('spans consecutive roles', () => {
    const e = employer(
      'a',
      { start: '2021-10', end: '2024-03' },
      { start: '2024-03', end: '2025-05' },
    );
    expect(employerPeriod(e)).toEqual({ start: '2021-10', end: '2025-05' });
  });

  it('stays open while any role is ongoing', () => {
    const e = employer('a', { start: '2021-10', end: '2024-03' }, { start: '2024-03' });
    expect(employerPeriod(e).end).toBeUndefined();
  });
});

describe('sortByMostRecent', () => {
  it('puts ongoing employers first and does not mutate the input', () => {
    const old = employer('old', { start: '2019-01', end: '2020-01' });
    const current = employer('current', { start: '2025-01' });
    const input = [old, current];
    expect(sortByMostRecent(input).map((e) => e.id)).toEqual(['current', 'old']);
    expect(input[0]).toBe(old);
  });
});

describe('totalExperienceMonths', () => {
  it('sums every role', () => {
    const e = employer(
      'a',
      { start: '2020-01', end: '2020-12' },
      { start: '2021-01', end: '2021-06' },
    );
    expect(totalExperienceMonths([e])).toBe(18);
  });
});
