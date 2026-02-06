'use client';
import styles from './../styles/Navbar.module.scss';
import Image from 'next/image';
import myLogo from '../../public/assets/julian-aijal-logo.svg';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScroll(window.scrollY > 1);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.nav} ${scroll && styles.nav__scrolled}`}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <Image
            alt="julian aijal"
            src={myLogo}
            sizes="200px"
            style={{
              width: '100%',
              height: '2rem',
            }}
          />
        </Link>
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/articles">Articles</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="mailto:hello@julianaijal.com">Ping me!</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
