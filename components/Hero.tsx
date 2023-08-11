import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../public/assets/julian.svg';
import { Button } from '../components';

const Hero = () => {
  return (
    <>
      <section className={styles.HeroGrid}>
        <div className={styles.Hero__cta}>
          <h1 className={styles.title}>Hi, I’m <span className={styles.name}>Julian</span>,<br/>Web developer.</h1>
          <Button/>
        </div>
        <div className={styles.Hero__visual}>
          <Image
            alt="julian aijal"
            src={myIllustration}
            priority={true}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
