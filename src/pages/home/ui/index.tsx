import { MediaList } from '@/entities/media/ui';
import { Box } from '@/shared/ui';
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
        <Box height="20px" />
        <MediaList />
        <Box height="20px" />
        <MediaList />
        <Box height="20px" />
        <MediaList />
      </div>
    </div>
  );
}
