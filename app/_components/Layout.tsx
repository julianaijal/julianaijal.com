import styles from "../styles/Home.module.scss";
import { ArticleBlock, Hero, NavBar, Footer } from "./";
import { getArticleLinks, getShowcase } from "./../_lib/prisma";
import fetchPosts from "../utils/api";
import { IArticle } from "./_interfaces/interfaces";

const Layout = async () => {
  const [articles, articlesHygraph, entries] = await Promise.all([
    getArticleLinks(),
    fetchPosts(),
    getShowcase(),
  ]);

  const externalPosts: IArticle[] =
    articlesHygraph?.data?.externalPostsPluralized ?? [];

  const articleData: IArticle[] = articles.map(
    ({ title, url, image, cta }) => ({
      title,
      url,
      cta,
      image,
    })
  );

  const articlesHygraphData: IArticle[] = externalPosts.map(
    ({ title, url, symbol }) => ({
      title,
      url,
      symbol
    })
  );

  console.log("Mapped Hygraph articles data:", articlesHygraphData);

  const showcaseData = entries.map(({ title }) => ({ title }));

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        {/* <Showcase entries={showcaseData} /> */}
        <ArticleBlock articles={articleData} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
