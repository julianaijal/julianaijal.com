import styles from '../styles/Home.module.scss';
import {
  ArticleList,
  ArticleSlider,
  Hero,
  NavBar,
  Footer,
} from './';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
          <ArticleList />
          <ArticleSlider />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
