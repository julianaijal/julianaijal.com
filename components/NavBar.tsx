import styles from './../styles/Navbar.module.scss';
import Image from 'next/image';
import myLogo from '../public/assets/julian-aijal-logo.svg';

const NavBar = () => {
  return (
    <>
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
            <li>Ping me!</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
