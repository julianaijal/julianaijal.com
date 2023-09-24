import styles from '../styles/ArticleList.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IArticle } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleListEntry:FC<IArticle> = (article, index ) => {
  return (
    <li key={index}>
      <div className={styles.ArticleListItem}>
        <div className={styles.ArticleListItemImage}>
          <Image
            alt={article.title}
            // to-do: add / import images properly via prisma
            src={`/assets/icons/${article.image}.svg`}
            sizes="100vw"
            width={48}
            height={48}
          />
        </div>
        <h3 className={styles.ArticleListItemTitle}>{article.title}</h3>
        <div className={styles.ArticleListItemCta}>
          <Link
            rel="noopener"
            href={article.url}
            className={styles.ArticleListItemLink}
          >
            {article.cta}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleListEntry;
