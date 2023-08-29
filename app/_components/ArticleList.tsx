import styles from '../styles/ArticleList.module.scss';
const ArticleList = () => {
  return (
    <>
      <section className={styles.ArticleList}>
        <div className={styles.ArticleListCta}>
          <p>cta</p>
        </div>
        <div className={styles.ArticleListEntries}>
          <p>list</p>
        </div>
      </section>
    </>
  );
};

export default ArticleList;
