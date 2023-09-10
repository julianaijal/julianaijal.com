import styles from '../styles/ArticleList.module.scss';
import { IArticles } from './_interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const ArticleList: React.FC<IArticles> = ({ articles }) => {
  return (
    <>
      <section className={styles.ArticleList}>
        <div className={styles.ArticleListCta}>
          <h2 className={styles.ArticleListCtaHeading}>Articles</h2>
          <p className={styles.ArticleListCtaCopy}>
            Some articles I have written
          </p>
        </div>
        <div className={styles.ArticleListEntries}>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <div className={styles.ArticleListItem}>
                  <div className={styles.ArticleListItemImage}>
                    <Image alt="" src="../../public/assets/julian-aijal-logo.svg" sizes="100vw" width={16} height={16} />
                  </div>
                  <p className={styles.ArticleListItemTitle}>{article.title}</p>
                  <div className={styles.ArticleListItemCta}>
                    <Link rel="noopener" href={article.url} className={styles.ArticleListItemLink}>{article.cta}</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ArticleList;
