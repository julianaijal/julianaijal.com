import styles from '../styles/Showcase.module.scss';
import Image from 'next/image';
import Logo from '../../public/assets/julian.svg';
interface ShowcaseCardProps {
  entries: {
    title: string;
  };
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ entries }) => {
  return (
    <div className={styles.ShowcaseCard}>
      <div className={styles.ShowcaseCardImg}>
        <Image alt="julian aijal" src={Logo} height={185} />
      </div>
      <div className={styles.ShowcaseCardCta}>
        <p>{entries.title}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;
