import { describe, expect, it } from 'vitest';
import { isLocale, pick } from './locale';

describe('pick', () => {
  it('returns the value for the requested locale', () => {
    expect(pick({ en: 'Hello', nl: 'Hallo' }, 'nl')).toBe('Hallo');
  });

  it('passes language-neutral values through', () => {
    expect(pick('Playwright', 'nl')).toBe('Playwright');
    expect(pick(['a', 'b'], 'en')).toEqual(['a', 'b']);
  });

  it('supports localized lists', () => {
    expect(pick({ en: ['one'], nl: ['een'] }, 'nl')).toEqual(['een']);
  });
});

describe('isLocale', () => {
  it('accepts supported locales only', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale(null)).toBe(false);
  });
});
