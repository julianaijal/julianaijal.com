import styles from '../styles/Showcase.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import { IShowcaseEntry } from './_interfaces/interfaces';

const ShowcaseCard: FC<IShowcaseEntry> = (entries) => {
  return (
    <div className={styles.ShowcaseCard}>
      <div className={styles.ShowcaseCardImg}>
        <img
          alt="julian aijal"
          src="https://placehold.co/600x400?text=kthnxbye"
          height={185}
          width={328}
        />
      </div>
      <div className={styles.ShowcaseCardCta}>
        <p className={styles.ShowcaseCardTitle}>{entries.title}</p>
        <Image
          alt="expand"
          src="/assets/icons/plus.svg"
          height={32}
          width={32}
        />
      </div>
    </div>
  );
};

export default ShowcaseCard;
