import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';
import { prisma } from './../_lib/prisma';

const Layout = async () => {
  let articles = await prisma.externalPost.findMany();
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <ArticleBlock articles={...articles} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
