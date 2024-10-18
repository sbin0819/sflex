import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as s from './styles.css';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const [scrolled, setScrolled] = useState(pathname !== '/');

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  return (
    <div className={scrolled ? s.headerContainer : s.homeHeaderContainer}>
      <div>
        <Link href="/">Movie</Link>
      </div>
      <ul className={s.ul}>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
