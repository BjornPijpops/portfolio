import { describe, expect, it } from 'vitest';
import { groupByYear } from './education';
import type { Education } from './types';

const entry = (title: string, year: number): Education => ({
  title,
  institution: 'x',
  year,
  kind: 'certificate',
});

describe('groupByYear', () => {
  it('groups by year, newest first, keeping order inside a year', () => {
    const groups = groupByYear([entry('a', 2022), entry('b', 2025), entry('c', 2022)]);
    expect(groups.map((g) => g.year)).toEqual([2025, 2022]);
    expect(groups[1]?.items.map((i) => i.title)).toEqual(['a', 'c']);
  });

  it('returns nothing for no input', () => {
    expect(groupByYear([])).toEqual([]);
  });
});
