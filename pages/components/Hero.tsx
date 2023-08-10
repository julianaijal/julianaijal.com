import styles from '../../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../../public/assets/julian.svg';

const Hero = () => {
  return (
    <>
      <section className={styles.grid}>
        <div>
          <h1 className={styles.title}>Hi, I’m Julian, Web developer.</h1>
        </div>
        <Image
          alt="julian "
          width="564"
          height="516"
          src={myIllustration}
        />
        <div></div>
      </section>
    </>
  );
};

export default Hero;
