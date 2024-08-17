'use client'
import styles from './../styles/Navbar.module.scss';
import Image from 'next/image';
import myLogo from '../../public/assets/julian-aijal-logo.svg';
import Link from 'next/link';
import { revalidateArticles } from './Layout';

const NavBar = () => {
const handleRevalidation =  async () =>{
  await revalidateArticles()
}
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Image
          alt="julian aijal"
          src={myLogo}
          sizes="100vw"
          style={{
            width: '100%',
            height: '2rem',
          }}
        />
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="mailto:hello@julianaijal.com">Ping me!</Link>
          </li>
        </ul>
        <button  onClick={handleRevalidation}>Revalidate articles</button>
      </div>
    </nav>
  );
};

export default NavBar;
