import { describe, expect, it } from 'vitest';
import { careerSegments, careerStats } from './career';
import type { Education, Employer, YearMonth } from './types';

const employer = (
  id: string,
  start: YearMonth,
  end: YearMonth | undefined,
  technologies: string[],
  consultancy?: string,
): Employer => ({
  id,
  name: id,
  industry: 'test',
  consultancy: consultancy ? { label: consultancy, url: 'https://example.com' } : undefined,
  roles: [
    {
      title: 't',
      period: { start, end },
      context: '',
      responsibilities: [],
      results: [],
      technologies,
    },
  ],
});

const course = (kind: Education['kind']): Education => ({
  title: kind,
  institution: 'x',
  year: 2020,
  kind,
});

describe('careerStats', () => {
  const employers = [
    employer('a', '2020-01', '2020-12', ['Robot Framework', 'Git'], 'Acme'),
    employer('b', '2021-01', '2021-06', ['robot framework'], 'acme'),
  ];

  it('sums months and counts distinct employers and consultancies', () => {
    const stats = careerStats(employers, [], new Date(2026, 0, 1));
    expect(stats).toMatchObject({
      totalMonths: 18,
      employers: 2,
      consultancies: 1,
    });
  });

  it('counts only certificates as certifications', () => {
    const stats = careerStats(employers, [
      course('certificate'),
      course('degree'),
      course('course'),
    ]);
    expect(stats.certifications).toBe(1);
  });
});

describe('careerSegments', () => {
  it('orders employers from oldest to newest', () => {
    const segments = careerSegments([
      employer('new', '2022-01', undefined, []),
      employer('old', '2020-01', '2020-12', []),
    ]);
    expect(segments.map((s) => s.id)).toEqual(['old', 'new']);
    expect(segments[0]?.months).toBe(12);
  });
});
