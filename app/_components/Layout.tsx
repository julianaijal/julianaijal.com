// Move ArticleSlider / ArticleList ternary in seperate component so layout doesn't need 'use client'
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
        {/* Move ArticleSlider / ArticleList ternary in seperate component so only that components needs 'use client' */}
        {/* https://www.perssondennis.com/articles/errors-received-when-migrating-nextjs-13-to-new-app-folder#user-content-using-client-side-hooks-in-server-components */}
        {width! < breakpoint ? <ArticleSlider /> : <ArticleList />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
