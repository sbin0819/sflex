import { MediaCard } from 'entities/media/ui';
import { useCallback, useMemo, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import * as s from './styles.css';

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const GAP_SIZE = 20;

export const MediaList = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => data.map((el) => <MediaCard key={el} />), []);

  const scrollList = useCallback((direction: 'left' | 'right') => {
    if (listRef.current) {
      const firstChild = listRef.current.firstChild as HTMLElement | null;
      if (!firstChild) return;

      const itemWidth = firstChild.offsetWidth;
      const scrollAmount = itemWidth + GAP_SIZE;

      listRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  const onLeftButtonClick = () => scrollList('left');
  const onRightButtonClick = () => scrollList('right');

  return (
    <div className={s.container}>
      <div className={s.leftButton} onClick={onLeftButtonClick}>
        <FaChevronLeft />
      </div>
      <div className={s.listContainer} ref={listRef}>
        {items}
      </div>
      <div className={s.rightButton} onClick={onRightButtonClick}>
        <FaChevronRight />
      </div>
    </div>
  );
};
