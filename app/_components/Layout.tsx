'use server';
import styles from "../styles/Home.module.scss";
import { ArticleBlock, Hero, NavBar, Footer } from "./";
import fetchPosts from "../utils/api";
import { IArticle } from "./_interfaces/interfaces";
import { revalidateTag } from 'next/cache';

const Layout = async () => {
  const [articlesHygraph] = await Promise.all([fetchPosts()]);

  const externalPosts: IArticle[] =
    articlesHygraph?.data?.externalPostsPluralized ?? [];
  const articlesHygraphData: IArticle[] = externalPosts.map(
    (post: IArticle) => ({
      title: post.title,
      url: post.url,
      symbol: post.symbol,
    })
  );

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <ArticleBlock articles={articlesHygraphData} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

export async function revalidateArticles() {
  revalidateTag('external-articles-collection');
}