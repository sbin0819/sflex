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
        <div>adventure</div>
        <Box height="8px" />
        <MediaList />
        <Box height="20px" />
        <div>horror</div>
        <Box height="8px" />
        <MediaList />
        <Box height="20px" />
        <div>comedy</div>
        <Box height="8px" />
        <MediaList />
        <Box height="20px" />
        <Box height="8px" />
        <div>drama</div>
        <MediaList />
      </div>
    </div>
  );
}
