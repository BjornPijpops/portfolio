import { periodInMonths } from './period';
import type { Employer, Period } from './types';

/** Overall span of an employer: earliest role start to latest role end (open if any role is ongoing). */
export function employerPeriod(employer: Employer): Period {
  const starts = employer.roles.map((r) => r.period.start).sort();
  const ends = employer.roles.map((r) => r.period.end);
  const isOngoing = ends.some((end) => end === undefined);
  const lastEnd = ends
    .filter((e): e is NonNullable<typeof e> => e !== undefined)
    .sort()
    .at(-1);
  return { start: starts[0]!, end: isOngoing ? undefined : lastEnd };
}

/** Employers ordered with the most recent first. */
export function sortByMostRecent(employers: readonly Employer[]): Employer[] {
  const key = (e: Employer) => employerPeriod(e).end ?? '9999-12';
  return [...employers].sort((a, b) => key(b).localeCompare(key(a)));
}

/** Total professional experience, in months, summed over all roles. */
export function totalExperienceMonths(employers: readonly Employer[], now?: Date): number {
  return employers
    .flatMap((e) => e.roles)
    .reduce((sum, role) => sum + periodInMonths(role.period, now), 0);
}
