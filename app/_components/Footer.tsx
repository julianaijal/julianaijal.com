import styles from './../styles/Footer.module.scss';
import Logo from '../../public/assets/julian-aijal-logo.svg';
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
          {[
            {
              href: 'https://github.com/julianaijal',
              src: '/assets/icons/github.svg',
              title:'github',
            },
            {
              href: 'https://www.linkedin.com/in/jaijal/',
              src: '/assets/icons/linkedin.svg',
              title:'linkedin',
            },
            {
              href: 'https://x.com/Jaijal',
              src: '/assets/icons/x.svg',
              title:'X',
            },
            {
              href: 'https://instagram.com/julian.aijal',
              src: '/assets/icons/instagram.svg',
              title:'instagram',
            },
          ].map((social, index) => (
            <li className={styles.footer__socialItem} key={index}>
              <Link rel="noopener" href={social.href}>
                <Image
                  src={social.src}
                  alt={social.title}
                  height={32}
                  width={32}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
