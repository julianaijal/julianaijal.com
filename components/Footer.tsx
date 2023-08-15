import styles from './../styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__contact}>Contact</div>
            <div className={styles.footer__logo}>logo</div>
            <div className={styles.footer__social}>
                <ul>
                    <li>
                        Link
                    </li>
                    <li>
                        Link
                    </li>
                    <li>
                        Link
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
