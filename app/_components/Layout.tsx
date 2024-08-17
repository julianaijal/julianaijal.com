'use server';

import styles from "../styles/Home.module.scss";
import { ArticleBlock, Hero, NavBar, Footer } from "./";
import fetchPosts from "../utils/api";
import { IArticle } from "./_interfaces/interfaces";

const Layout = async () => {
  const { data } = await fetchPosts();

  const articlesHygraphData: IArticle[] = data?.externalPostsPluralized?.map(
    ({ title, url, symbol }: IArticle) => ({ title, url, symbol })
  ) ?? [];

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