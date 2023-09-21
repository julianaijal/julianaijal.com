'use client';
import React, { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../../public/assets/julian.svg';
import { Button } from '.';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const h1Ref = useRef(null);

  useEffect(() => {
    if (inView) {
      h1Ref.current.classList.add(styles.fadeInText);
    }
  }, [inView]);

  return (
    <section className={styles.HeroGrid}>
      <div className={styles.Hero__cta}>
        <h1
          ref={(el) => {
            ref(el);
            h1Ref.current = el;
          }}
          className={styles.title}
        >
          Hi, I’m <span className={styles.name}>Julian</span>,<br />
          Web developer.
        </h1>
        <Button />
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
  );
};

export default Hero;
