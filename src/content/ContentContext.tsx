import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { createContentRepository, type ContentRepository } from './repository';

const ContentContext = createContext<ContentRepository | null>(null);

interface ContentProviderProps {
  /** Override the content source, e.g. in tests. Defaults to the bundled content in the active locale. */
  repository?: ContentRepository;
  children: ReactNode;
}

export function ContentProvider({ repository, children }: ContentProviderProps) {
  const { locale } = useLocale();
  const value = useMemo(() => repository ?? createContentRepository(locale), [repository, locale]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent(): ContentRepository {
  const value = useContext(ContentContext);
  if (!value) throw new Error('useContent must be used inside <ContentProvider>');
  return value;
}
