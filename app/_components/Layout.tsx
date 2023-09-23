import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Showcase, Footer } from './';
import { getArticleLinks, getShowcase } from './../_lib/prisma';

const Layout = async () => {
  let articles = await getArticleLinks();
  let entries = await getShowcase();
  const showcaseData = entries.map(({ title }) => ({ title }));
  const articleData = articles.map(({ title, url, image, cta }) => ({ title, url, cta, image }));
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Showcase entries={showcaseData} />
        <ArticleBlock articles={articleData} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
