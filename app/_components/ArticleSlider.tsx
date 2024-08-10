import styles from '../styles/ArticleSlider.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleSlider: FC<IArticles> = ({ hygraph }) => {
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {hygraph.map((article, index) => (
          <div className={styles.ArticleSliderEntry} key={index}>
            <div className={styles.ArticleSliderCard}>
              <div className={styles.ArticleSliderCardCta}>
                <div className={styles.ArticleSliderCardImg}>
                  <Image
                    alt={article.title}
                    src={`/assets/icons/${article.image}.svg`}
                    sizes="100vw"
                    width={48}
                    height={48}
                  />
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
                </div>
              </div>
              <div className={styles.ArticleSliderCardCopy}>
                <h3 className={styles.ArticleSliderCardTitle}>
                  {article.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
