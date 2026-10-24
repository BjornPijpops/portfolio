import { describe, expect, it } from 'vitest';
import { displayUrl } from './links';

describe('displayUrl', () => {
  it('strips protocol, www and trailing slash', () => {
    expect(displayUrl('https://www.linkedin.com/in/bjorn-pijpops/')).toBe(
      'linkedin.com/in/bjorn-pijpops',
    );
    expect(displayUrl('http://example.com')).toBe('example.com');
  });
});
