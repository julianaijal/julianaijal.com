import styles from '../styles/Showcase.module.scss';
import ShowcaseCard from './ShowcaseCard';
import { IShowcase } from './_interfaces/interfaces';

const Showcase: React.FC<IShowcase> = ({ entries }) => {
  return (
    <section className={styles.Showcase}>
      <h2 className={styles.ShowcaseTitle}>Some of my work</h2>
      <div className={styles.ShowcaseGrid}>
        {entries.map((card, i) => (
          <ShowcaseCard key={i} entries={card} /> 
        ))}
      </div>
    </section>
  );
};

export default Showcase;
