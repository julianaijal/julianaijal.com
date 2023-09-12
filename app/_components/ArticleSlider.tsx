import styles from '../styles/ArticleSlider.module.scss';
import { IArticles } from './_interfaces/interfaces';

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
            <p className={styles.ArticleSliderCardTitle}>{article.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
