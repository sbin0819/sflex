import { MediaList } from '@/entities/media/ui';
import { HeroBanner } from '@/widgets/hero-banner';
import { container } from './styles.css';

export function HomePage() {
  return (
    <div className={container}>
      <HeroBanner />
      <div>
        <MediaList />
        <MediaList />
        <MediaList />
        <MediaList />
      </div>
    </div>
  );
}
