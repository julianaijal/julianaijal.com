import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../public/assets/julian.svg';

const Hero = () => {
  return (
    <>
      <section className={styles.grid}>
        <div>
          <h1 className={styles.title}>Hi, I’m Julian, Web developer.</h1>
        </div>
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
      </section>
    </>
  );
};

export default Hero;
