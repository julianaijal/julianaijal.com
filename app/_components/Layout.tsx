'use server';
import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';
import fetchPosts from '../utils/api';
import { IArticle } from './_interfaces/interfaces';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const Layout = async () => {
  // Rick roll
  const referer = headers().get('referer') || '';
  if (referer.toLowerCase().includes('.php')) {
    redirect('https://www.youtube.com/watch?v=xvFZjo5PgG0'); // Server-side redirect
  }

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
