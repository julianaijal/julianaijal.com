'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../../public/assets/julian.svg';
import { Button } from '.';
import useInViewport from '../hooks/useInviewport';

const Hero = () => {
  
  const { ref, isVisible, targetEl } = useInViewport();

  return (
    <section className={styles.HeroGrid}>
      <div className={styles.Hero__cta}>
        <h1
          ref={(el) => {
            ref(el);
            targetEl.current = el;
          }}
          className={`${styles.title} ${
            isVisible ? styles.fadeInText : styles.hiddenText
          }`}
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
