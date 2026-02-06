import styles from '../styles/ArticleSlider.module.scss';
import { IArticleCollection } from './_interfaces/interfaces';
import { FC } from 'react';
import ArticleSliderEntry from './ArticleSliderEntry';
import Link from 'next/link';

const ArticleSlider: FC<IArticleCollection> = ({ articles = [] }) => {
  return (
    <section className={styles.ArticleSlider}>
      <div className={styles.ArticleSliderCta}>
        <h2 className={styles.ArticleSliderCtaHeading}>Articles</h2>
        <p className={styles.ArticleSliderCtaCopy}>
          Some articles I have written
        </p>
        <Link href="/articles" className={styles.ArticleSliderCtaLink}>
          View all articles
        </Link>
      </div>
      <div className={styles.ArticleSliderEntries}>
        {articles.map((article, index) => (
          <ArticleSliderEntry key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSlider;
