import styles from './../styles/Footer.module.scss';
import myLogo from '../public/assets/julian-aijal-logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contact}>Contact</div>
      <div className={styles.footer__logo}>
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
      <div className={styles.footer__social}>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
