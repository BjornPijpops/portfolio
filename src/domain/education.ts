import type { Education } from './types';

export interface EducationYearGroup {
  year: number;
  items: Education[];
}

/** Groups entries by year, most recent year first; order within a year is preserved. */
export function groupByYear(items: readonly Education[]): EducationYearGroup[] {
  const groups = new Map<number, Education[]>();
  for (const item of items) {
    groups.set(item.year, [...(groups.get(item.year) ?? []), item]);
  }
  return [...groups.entries()].sort(([a], [b]) => b - a).map(([year, items]) => ({ year, items }));
}
