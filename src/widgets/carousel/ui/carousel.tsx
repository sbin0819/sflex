import { FC, useCallback, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import * as s from './styles.css';

const GAP_SIZE = 20;

interface CarouselItemProps {
  items: JSX.Element[];
}

export const Carousel: FC<CarouselItemProps> = ({ items }) => {
  const listRef = useRef<HTMLDivElement>(null);

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
