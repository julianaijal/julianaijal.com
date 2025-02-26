import styles from '../styles/ArticleList.module.scss';
import { IArticleCollection } from './_interfaces/interfaces';
import ArticleListEntry from './ArticleListEntry';

const ArticleList: React.FC<IArticleCollection> = ({ articles = [] }) => (
  <section className={styles.ArticleList}>
    <div className={styles.ArticleListCta}>
      <h2 className={styles.ArticleListCtaHeading}>Articles</h2>
      <p className={styles.ArticleListCtaCopy}>Some articles I have written</p>
    </div>
    <ul className={styles.ArticleListEntries}>
      {articles.map((article, index) => (
        <ArticleListEntry key={index} {...article} />
      ))}
    </ul>
  </section>
);

export default ArticleList;
