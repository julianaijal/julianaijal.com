import styles from '../styles/ArticleList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IArticle } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleListEntry: FC<IArticle> = ({ title, url, symbol }) => {
  return (
    <li>
      <div className={styles.ArticleListItem}>
        <div className={styles.ArticleListItemImage}>
          {symbol?.url && (
            <Image
              alt={title}
              src={symbol.url}
              sizes="100vw"
              width={48}
              height={48}
            />
          )}
        </div>
        <h3 className={styles.ArticleListItemTitle}>{title}</h3>
        <div className={styles.ArticleListItemCta}>
          <Link
            rel="noopener"
            href={url}
            className={styles.ArticleListItemLink}
          >
            Read more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleListEntry;