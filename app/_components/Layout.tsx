import styles from '../styles/Home.module.scss';
import { ArticleBlock, Hero, NavBar, Footer } from './';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <ArticleBlock />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
