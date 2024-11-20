import styles from "./../styles/Footer.module.scss";
import Logo from "../../public/assets/julian-aijal-logo.svg";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/julianaijal",
    src: "/assets/icons/github.svg",
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jaijal/",
    src: "/assets/icons/linkedin.svg",
    title: "LinkedIn",
  },
  {
    href: "https://x.com/Jaijal",
    src: "/assets/icons/x.svg",
    title: "Twitter (X)",
  },
  {
    href: "https://instagram.com/julian.aijal",
    src: "/assets/icons/instagram.svg",
    title: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contact}>
        <Link href="mailto:hello@julianaijal.com" aria-label="Email Julian Aijal">
          Ping me!
        </Link>
      </div>

      <div className={styles.footer__logo}>
        <Image
          alt="Julian Aijal logo"
          src={Logo}
          sizes="100vw"
          priority
          style={{
            width: "100%",
            height: "2rem",
          }}
        />
      </div>

      <nav className={styles.footer__social} aria-label="Social Media Links">
        <ul className={styles.footer__socialList}>
          {socialLinks.map(({ href, src, title }, index) => (
            <li className={styles.footer__socialItem} key={index}>
              <Link href={href} rel="noopener noreferrer" aria-label={title}>
                <Image
                  src={src}
                  alt={title}
                  height={32}
                  width={32}
                  loading="lazy"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;