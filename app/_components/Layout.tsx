import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';
import { getArticleLinks } from './../_lib/prisma';

const Layout = async () => {
  let articles = await getArticleLinks();
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <ArticleBlock articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
