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
          <div className={styles.ArticleSliderCard} key={index}>
            <div className={styles.ArticleSliderCardCta}>
              <div className={styles.ArticleSliderCardImg}>
                {' '}
                <Image
                  alt={article.title}
                  src={`/assets/icons/${article.image}.svg`}
                  sizes="100vw"
                  width={48}
                  height={48}
                />
              </div>
              <div className={styles.ArticleSliderCardBt}>
                {' '}
                <Link
                  rel="noopener"
                  href={article.url}
                  className={styles.ArticleListItemLink}
                >
                  {article.cta}
                </Link>
              </div>
            </div>
            <div className={styles.ArticleSliderCardCopy}>
              <h2>{article.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
