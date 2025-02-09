import styles from "../styles/ArticleSlider.module.scss";
import { IArticles } from "./_interfaces/interfaces";
import { FC } from "react";
import ArticleSliderEntry from "./ArticleSliderEntry";

{/* todo: fix props passed to old naming {articles instead of articlesnew} */}
const ArticleSlider: FC<IArticles> = ({ articlesnew = [] }) => {
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {articlesnew.map((article, index) => (
          <ArticleSliderEntry key={index} {...article}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
