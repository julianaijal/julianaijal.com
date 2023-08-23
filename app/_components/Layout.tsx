'use client'
import styles from '../styles/Home.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import {
  ArticleList,
  ArticleSlider,
  Hero,
  NavBar,
  Footer,
} from './';

const Layout = () => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        {width < breakpoint ? <ArticleSlider /> : <ArticleList />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
