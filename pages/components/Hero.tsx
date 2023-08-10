import styles from '../../styles/Hero.module.scss';
import Image from 'next/image';
const Hero = () => {
  return (
    <>
      <section className={styles.grid}>
        <div>
          <h1 className={styles.title}>Hi, I’m Julian, Web developer.</h1>
        </div>
        <img
          alt="julian "
          width="206"
          src="https://avatars.githubusercontent.com/u/16819318?v=4"
        />
        <div></div>
      </section>
    </>
  );
};

export default Hero;
