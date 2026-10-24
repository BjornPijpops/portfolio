import { employerPeriod } from './employment';
import { periodInMonths } from './period';
import type { Education, Employer, Period } from './types';

export interface CareerStats {
  totalMonths: number;
  employers: number;
  consultancies: number;
  certifications: number;
}

export interface CareerSegment {
  id: string;
  name: string;
  period: Period;
  months: number;
}

const countUnique = (values: readonly string[]) =>
  new Set(values.map((value) => value.trim().toLowerCase())).size;

/** Headline numbers for the home page. */
export function careerStats(
  employers: readonly Employer[],
  education: readonly Education[],
  now?: Date,
): CareerStats {
  const roles = employers.flatMap((e) => e.roles);
  return {
    totalMonths: roles.reduce((sum, role) => sum + periodInMonths(role.period, now), 0),
    employers: employers.length,
    consultancies: countUnique(
      employers.flatMap((e) => (e.consultancy ? [e.consultancy.label] : [])),
    ),
    certifications: education.filter((item) => item.kind === 'certificate').length,
  };
}

/** Employers in chronological order, each with its length in months, for drawing a timeline. */
export function careerSegments(employers: readonly Employer[], now?: Date): CareerSegment[] {
  return employers
    .map((employer) => {
      const period = employerPeriod(employer);
      return { id: employer.id, name: employer.name, period, months: periodInMonths(period, now) };
    })
    .sort((a, b) => a.period.start.localeCompare(b.period.start));
}
