import styles from '../styles/ArticleSlider.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleSlider: FC<IArticles> = ({ articles }) => {
  // to do 1: fetch slugs from hygraph entries from parent, deconstruct above (see next comment)
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {articles.map((article, index) => {
          const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <div className={styles.ArticleSliderEntry} key={index}>
              <div className={styles.ArticleSliderCard}>
                <div className={styles.ArticleSliderCardCta}>
                  <div className={styles.ArticleSliderCardImg}>
                    {article.symbol?.url && (
                      <Image
                        alt={article.title}
                        src={article.symbol.url}
                        sizes="100vw"
                        width={48}
                        height={48}
                      />
                    )}
                  </div>
                  <div className={styles.ArticleSliderCardBtnWrapper}>
                    <div className={styles.ArticleSliderCardBtn}>
                      <Link
                        rel="noopener"
                        href={article.url}
                        className={styles.ArticleSliderCardLink}
                      >
                        Read more
                      </Link>
                    </div>
                    {/* to do 2: and pass here */}
                    <Link href={`/articles/${slug}`} passHref>
                      <button className={styles.ArticleListItemButton}>Go</button>
                    </Link>
                  </div>
                </div>
                <div className={styles.ArticleSliderCardCopy}>
                  <h3 className={styles.ArticleSliderCardTitle}>
                    {article.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArticleSlider;