import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import * as s from './styles.css';

const GAP_SIZE = 20;

interface CarouselProps {
  items: JSX.Element[];
}

export const Carousel: FC<CarouselProps> = ({ items }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  }, []);

  useEffect(() => {
    updateScrollButtons();
  }, [items, updateScrollButtons]);

  useEffect(() => {
    const currentRef = listRef.current;
    if (!currentRef) return;

    currentRef.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    updateScrollButtons();

    return () => {
      currentRef.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

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
      {canScrollLeft && (
        <div className={s.leftButton} onClick={onLeftButtonClick}>
          <FaChevronLeft />
        </div>
      )}
      <div className={s.listContainer} ref={listRef}>
        {items}
      </div>
      {canScrollRight && (
        <div className={s.rightButton} onClick={onRightButtonClick}>
          <FaChevronRight />
        </div>
      )}
    </div>
  );
};
