import { MediaList } from '@/entities/media/ui';
import { HeroBanner } from '@/widgets/hero-banner';
import { Suspense } from 'react';
import { container } from './styles.css';

export function HomePage() {
  return (
    <div className={container}>
      <Suspense>
        <HeroBanner />
      </Suspense>
      <div>
        <MediaList />
        <MediaList />
        <MediaList />
        <MediaList />
      </div>
    </div>
  );
}
