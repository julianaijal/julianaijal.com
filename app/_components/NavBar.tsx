'use client'
import styles from './../styles/Navbar.module.scss';
import Image from 'next/image';
import myLogo from '../../public/assets/julian-aijal-logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll =  () =>{
        setScroll(scrollY > 1)
      }
      window.addEventListener('scroll', handleScroll);
      return () => {window.removeEventListener('scroll', handleScroll)}

    }
  }, []);
  return (
    <nav className={`${styles.nav} ${scroll && styles.nav__scrolled}`}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <Image
            alt="julian aijal"
            src={myLogo}
            sizes="100vw"
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
            <Link href="mailto:hello@julianaijal.com">Ping me!</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
