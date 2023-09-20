import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Showcase, Footer } from './';
import { getArticleLinks, getShowcase } from './../_lib/prisma';

const Layout = async () => {
  let articles = await getArticleLinks();
  let entries = await getShowcase();
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Showcase entries={entries} />
        <ArticleBlock articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
