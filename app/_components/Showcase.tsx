import styles from '../styles/Showcase.module.scss';
import ShowcaseCard from './ShowcaseCard';
import { IShowcase } from './_interfaces/interfaces';
import { FC } from 'react';

const Showcase:FC<IShowcase> = ({ entries }) => {
  return (
    <section className={styles.Showcase}>
      <h2 className={styles.ShowcaseTitle}>Some of my work</h2>
      <div className={styles.ShowcaseGrid}>
        {entries.map((entry, i) => (
          <ShowcaseCard key={i} {...entry} /> 
        ))}
      </div>
    </section>
  );
};

export default Showcase;
