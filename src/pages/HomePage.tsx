import { Hero } from '../features/hero/Hero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle();
  return <Hero />;
}
