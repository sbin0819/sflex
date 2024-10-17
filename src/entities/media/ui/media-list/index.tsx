import { MediaCard } from 'entities/media/ui';
import * as s from './styles.css';
export const MediaList = () => {
  return (
    <div className={s.container}>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
};
