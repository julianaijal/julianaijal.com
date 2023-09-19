import styles from '../styles/Showcase.module.scss';
import { IShowcase } from './_interfaces/interfaces';

const ShowcaseCard: React.FC<IShowcase> = ({entries}) => {
  return (
    <div className={styles.ShowcaseCard}>
    </div>
  );
};

export default ShowcaseCard;
