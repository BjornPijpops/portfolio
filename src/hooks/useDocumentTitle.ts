import { useEffect } from 'react';
import { useContent } from '../content/ContentContext';

/** Sets the browser tab title. Without a page title, falls back to "Name · Headline". */
export function useDocumentTitle(pageTitle?: string) {
  const { name, headline } = useContent().getProfile();

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · ${name}` : `${name} · ${headline}`;
  }, [pageTitle, name, headline]);
}
