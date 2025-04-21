'use server';

import styles from '../styles/IntroCopy.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';
import apiFunctions from '../utils/api';
import { IArticle } from './_interfaces/interfaces';
import DOMPurify from 'dompurify';
import html from 'html-react-parser';
import { JSDOM } from 'jsdom';

const Layout = async () => {
  const { data: postsData } = await apiFunctions.fetchPosts();
  const { data: articlesData } = await apiFunctions.fetchArticles();
  const { data: homeData } = await apiFunctions.fetchHome();

  const articlesHygraphData: IArticle[] =
    postsData?.externalPostsPluralized?.map(
      ({ title, url, symbol }: IArticle) => ({ title, url, symbol }),
    ) ?? [];

  const mappedArticles: IArticle[] =
    articlesData?.articles?.map(({ title, slug }: IArticle) => ({
      title,
      slug,
    })) ?? [];

  const content = homeData?.homepages?.[0]?.intro?.html;
  let parsedHtml = null;
  if (content) {
    const window = new JSDOM('').window;
    const domPurify = DOMPurify(window);
    const sanitizedHtml = domPurify.sanitize(content);
    parsedHtml = html(sanitizedHtml);
  }

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <section className={styles.introCopy}>
          {parsedHtml}
        </section>
        <ArticleBlock articles={mappedArticles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
