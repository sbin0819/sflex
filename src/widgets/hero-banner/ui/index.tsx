import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css';
import * as s from './styles.css';

const images = [
  'https://images.unsplash.com/photo-1518043129420-ed9d4efcdcc9?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1583903445512-0e92adef41ba?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1543584756-8f40a802e14f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const HeroBanner = () => {
  const items = images.map((el, idx) => (
    <div className={s.imageContainer} key={idx}>
      <Image
        className={s.image}
        src={`${el}200/300`}
        alt="hero-banner"
        fill={true}
      />
    </div>
  ));

  return (
    <div className={s.container}>
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={1000 * 5}
        infinite={true}
        items={items}
      />
    </div>
  );
};
