import AliceCarousel from 'react-alice-carousel';
import './carousel.css';
import { container } from './styles.css';

export const HeroBanner = () => {
  const items = [<h1 key={1}>1</h1>, <h1 key={2}>2</h1>, <h1 key={3}>3</h1>];
  return (
    <div className={container}>
      <AliceCarousel items={items} />
    </div>
  );
};
