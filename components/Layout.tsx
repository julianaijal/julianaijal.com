
import styles from '../styles/Home.module.scss';
import { Hero } from '../components';
const Layout = ()=> {
  return (
    <>
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}

export default Layout;
