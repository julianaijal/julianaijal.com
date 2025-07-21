'use server';

import styles from '../styles/Home.module.scss';
import introCopyStyles from '../styles/IntroCopy.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';
import apiFunctions from '../utils/api';
import { IArticle } from './_interfaces/interfaces';
import DOMPurify from 'isomorphic-dompurify';
import html from 'html-react-parser';

const Layout = async () => {
  const { data: articlesData } = await apiFunctions.fetchArticles();
  const { data: homeData } = await apiFunctions.fetchHome();

  const mappedArticles: IArticle[] =
    articlesData?.articles?.map(({ title, slug }: IArticle) => ({
      title,
      slug,
    })) ?? [];

  const content = homeData?.homepages?.[0]?.intro?.html;
  let parsedHtml = null;
  if (content) {
    const sanitizedHtml = DOMPurify.sanitize(content);
    parsedHtml = html(sanitizedHtml);
  }

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <section className={introCopyStyles.introCopy}>{parsedHtml}</section>
        <ArticleBlock articles={mappedArticles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
