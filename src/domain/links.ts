/** A short, human-friendly form of a URL: no protocol, "www." or trailing slash. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
