import styles from "../styles/Home.module.scss";
import { ArticleBlock, Hero, NavBar, Footer } from "./";
import { getShowcase } from "./../_lib/prisma";
import fetchPosts from "../utils/api";
import { IArticle } from "./_interfaces/interfaces";

const Layout = async () => {
  const [articlesHygraph, entries] = await Promise.all([
    fetchPosts(),
    getShowcase(),
  ]);

  const externalPosts: IArticle[] =
    articlesHygraph?.data?.externalPostsPluralized ?? [];
  const articlesHygraphData: IArticle[] = externalPosts.map(
    ({ title, url, symbol }) => ({
      title,
      url,
      symbol,
    })
  );
  const showcaseData = entries.map(({ title }) => ({ title }));
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        {/* <Showcase entries={showcaseData} /> */}
        <ArticleBlock articles={articlesHygraphData} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
