import styles from '../styles/Button.module.scss';
import Link from 'next/link';

const Button = () => {
  return (
    <Link className={styles.button} href="mailto:hello@julianaijal.com">
      Mail me
    </Link>
  );
};

export default Button;
