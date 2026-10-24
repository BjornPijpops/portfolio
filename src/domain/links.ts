/** A short, human-friendly form of a URL: no protocol, "www." or trailing slash. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

/** Encodes each segment of a relative path, keeping sub-folder separators intact. */
export function encodePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/');
}
