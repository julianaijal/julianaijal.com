import styles from '../styles/ArticleList.module.scss';
interface ArticleListProps  {
articles: {
  id: string
  title: string
  substitle?: string
  image?: string,
  cta: string,
  url: string 
}[];
}
const ArticleList:  React.FC<ArticleListProps> = ({articles}) => {
  return (
    <>
      <section className={styles.ArticleList}>
        <div className={styles.ArticleListCta}>
          <h2 className={styles.ArticleListCtaHeading}>Articles</h2>
          <p className={styles.ArticleListCtaCopy}>Some articles I have written</p>
        </div>
        <div className={styles.ArticleListEntries}>
          <p>list</p>
        </div>
      </section>
    </>
  );
};

export default ArticleList;
