import { describe, expect, it } from 'vitest';
import { LOCALES } from '../domain';
import { createContentRepository } from './repository';

describe.each(LOCALES)('content repository (%s)', (locale) => {
  const repository = createContentRepository(locale);

  it('resolves every localized value to plain content', () => {
    const everything = JSON.stringify([
      repository.getProfile(),
      repository.getEmployers(),
      repository.getProjects(),
      repository.getEducation(),
    ]);
    expect(everything).not.toContain('"nl":');
    expect(everything).not.toContain('"en":');
  });

  it('has no empty text in employment history', () => {
    for (const employer of repository.getEmployers()) {
      expect(employer.industry).not.toBe('');
      for (const role of employer.roles) {
        expect(role.context).not.toBe('');
        expect(role.responsibilities.length).toBeGreaterThan(0);
        expect(role.results.length).toBeGreaterThan(0);
      }
    }
  });

  it('returns stable references between reads', () => {
    expect(repository.getEmployers()).toBe(repository.getEmployers());
  });
});

describe('translations', () => {
  it('provide the same amount of bullet points in every language', () => {
    const [en, nl] = LOCALES.map((l) => createContentRepository(l).getEmployers());
    en?.forEach((employer, i) => {
      employer.roles.forEach((role, j) => {
        const other = nl?.[i]?.roles[j];
        expect(other?.responsibilities).toHaveLength(role.responsibilities.length);
        expect(other?.results).toHaveLength(role.results.length);
      });
    });
  });
});
