import { CareerStats } from '../features/career/CareerStats';
import { CareerTimeline } from '../features/career/CareerTimeline';
import { Hero } from '../features/hero/Hero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <CareerStats />
      <CareerTimeline />
    </>
  );
}
