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
  const { width, height } = useWindowDimensions();
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
          <ArticleList />
          <ArticleSlider />
      </main>
      <p>Screen width: {width}px</p>
      <p>Screen height: {height}px</p>
      <Footer />
    </>
  );
};

export default Layout;
