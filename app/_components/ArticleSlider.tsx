import styles from "../styles/ArticleSlider.module.scss";
import { IArticles } from "./_interfaces/interfaces";
import { FC } from "react";
import ArticleSliderEntry from "./ArticleSliderEntry";

const ArticleSlider: FC<IArticles> = ({ articles }) => {
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
          <ArticleSliderEntry
            key={index}
            title={article.title}
            url={article.url}
            symbol={article.symbol}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
