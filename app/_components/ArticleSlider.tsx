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
        <ul>
          {articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleSlider;
