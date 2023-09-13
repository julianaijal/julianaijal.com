import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Showcase, Footer } from './';
import { getArticleLinks } from './../_lib/prisma';

const Layout = async () => {
  let articles = await getArticleLinks();
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Showcase />
        <ArticleBlock articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
