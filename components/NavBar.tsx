import styles from './../styles/Navbar.module.scss';
import Image from 'next/image';
import myLogo from '../public/assets/julian-aijal-logo.svg';

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
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
        <div>
          <ul className={styles.nav}>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
