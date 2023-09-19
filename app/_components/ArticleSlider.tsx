import styles from '../styles/ArticleSlider.module.scss';
import { IArticles } from './_interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const ArticleSlider: React.FC<IArticles> = ({ articles }) => {
  console.log(articles);
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {articles.map((article, index) => (
          <div className={styles.ArticleSliderEntry} key={index}>
            <div className={styles.ArticleSliderCard}>
              <div className={styles.ArticleSliderCardCta}>
                <div className={styles.ArticleSliderCardImg}>
                  {' '}
                  <Image
                    alt={article.title}
                    // to-do: add / import images properly via prisma
                    src={`/assets/icons/${article.image}.svg`}
                    sizes="100vw"
                    width={48}
                    height={48}
                  />
                </div>
                <div className={styles.ArticleSliderCardBtnWrapper}>
                  <div className={styles.ArticleSliderCardBtn}>
                    {' '}
                    <Link
                      rel="noopener"
                      href={article.url}
                      className={styles.ArticleSliderCardLink}
                    >
                      {article.cta}
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
