import { MediaList } from '@/entities/media/ui';
import { container } from './styles.css';

export function HomePage() {
  return (
    <div className={container}>
      <h1>HERO CARD</h1>
      <div>
        <MediaList />
        <MediaList />
        <MediaList />
        <MediaList />
      </div>
    </div>
  );
}
