import { describe, expect, it } from 'vitest';
import { displayUrl, encodePath } from './links';

describe('displayUrl', () => {
  it('strips protocol, www and trailing slash', () => {
    expect(displayUrl('https://www.linkedin.com/in/bjorn-pijpops/')).toBe(
      'linkedin.com/in/bjorn-pijpops',
    );
    expect(displayUrl('http://example.com')).toBe('example.com');
  });
});

describe('encodePath', () => {
  it('encodes each segment but keeps the slashes', () => {
    expect(encodePath('ISTQB - Foundation/cert #1.pdf')).toBe(
      'ISTQB%20-%20Foundation/cert%20%231.pdf',
    );
  });
});
