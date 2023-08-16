import styles from './../styles/Footer.module.scss';
import Logo from '../public/assets/julian-aijal-logo.svg';
import Icon from '../public/assets/icons/envelope.svg';
import github from '../public/assets/icons/github.svg';
import linkedin from '../public/assets/icons/linkedin.svg';
import twitter from '../public/assets/icons/twitter.svg';
import instagram from '../public/assets/icons/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contact}>
        <Link href="mailto:hello@julianaijal.com">Ping me!</Link>
      </div>
      <div className={styles.footer__logo}>
        <Image
          alt="julian aijal"
          src={Logo}
          sizes="100vw"
          style={{
            width: '100%',
            height: '2rem',
          }}
        />
      </div>
      <div className={styles.footer__social}>
        <ul className={styles.footer__socialList}>
          <li className={styles.footer__socialItem}>
            <Link rel="noopener" href="https://github.com/julianaijal">
              <Image
                alt="julian aijal"
                src={github}
                sizes="100vw"
                style={{ width: '100%', height: '2rem' }}
              />
            </Link>
          </li>
          <li className={styles.footer__socialItem}>
            <Link rel="noopener" href="https://www.linkedin.com/in/jaijal/">
              <Image
                alt="julian aijal"
                src={linkedin}
                sizes="100vw"
                style={{ width: '100%', height: '2rem' }}
              />
            </Link>
          </li>
          <li className={styles.footer__socialItem}>
            <Link rel="noopener" href="https://twitter.com/Jaijal">
              <Image
                alt="julian aijal"
                src={twitter}
                sizes="100vw"
                style={{ width: '100%', height: '2rem' }}
              />
            </Link>
          </li>
          <li className={styles.footer__socialItem}>
            <Link rel="noopener" href="https://instagram.com/julian.aijal">
              <Image
                alt="julian aijal"
                src={instagram}
                sizes="100vw"
                style={{ width: '100%', height: '2rem' }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
