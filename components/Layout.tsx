import styles from '../styles/Home.module.scss';
import { Hero, NavBar } from '../components';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
};

export default Layout;
