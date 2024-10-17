import { Carousel } from '@/widgets/carousel';
import { MediaCard } from 'entities/media/ui';
import { useMemo } from 'react';
import * as s from './styles.css';

const data = [1, 2, 3, 4, 5, 6, 7, 8];

export const MediaList = () => {
  const items = useMemo(() => data.map((el) => <MediaCard key={el} />), []);

  return (
    <div className={s.container}>
      <Carousel items={items} />
    </div>
  );
};
