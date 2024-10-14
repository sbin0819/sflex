import Link from 'next/link';
import { container, ul } from './styles.css';

export const Header = () => {
  return (
    <div className={container}>
      <div>Sflex</div>
      <ul className={ul}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
