import { MediaList } from '@/entities/media/ui';
import { HeroBanner } from '@/widgets/hero-banner';
import { Suspense } from 'react';
import * as s from './styles.css';

export function HomePage() {
  return (
    <div className={s.container}>
      <Suspense>
        <HeroBanner />
      </Suspense>
      <div className={s.body}>
        <div>
          <div>adventure</div>
          <MediaList />
        </div>
        <div>
          <div>horror</div>
          <MediaList />
        </div>
        <div>
          <div>comedy</div>
          <MediaList />
        </div>
        <div>
          <div>drama</div>
          <MediaList />
        </div>
      </div>
    </div>
  );
}
