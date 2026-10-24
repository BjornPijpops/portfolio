import { describe, expect, it } from 'vitest';
import { resolveInitialLocale } from './detect';

describe('resolveInitialLocale', () => {
  it('prefers a stored choice', () => {
    expect(resolveInitialLocale('en', 'nl-BE')).toBe('en');
  });

  it('follows the browser language', () => {
    expect(resolveInitialLocale(null, 'nl-BE')).toBe('nl');
  });

  it('falls back to English for unsupported or missing languages', () => {
    expect(resolveInitialLocale('xx', 'fr-FR')).toBe('en');
    expect(resolveInitialLocale(null, undefined)).toBe('en');
  });
});
