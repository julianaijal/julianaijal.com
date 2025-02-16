'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../../public/assets/julian.svg';
import { Button } from '.';
import useInViewFade from '../hooks/useInViewFade';

const Hero = () => {
  const { ref, isVisible, targetEl } = useInViewFade();
  const words = ['Web Developer', 'SEO Specialist', 'Digital Marketeer'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect((): any => {
    const currentWord = words[wordIndex];
    console.log('Current word:', currentWord);
    setText(currentWord);
    return ;
  }, [wordIndex, words]);

  return (
    <section className={styles.HeroGrid}>
      <div className={styles.Hero__cta}>
        <h1
          ref={el => {
            ref(el);
            targetEl.current = el;
          }}
          className={`${styles.title} ${
            isVisible ? styles.fadeInText : styles.hiddenText
          }`}
        >
          Hi, I&apos;m <span className={styles.name}>Julian</span>, <br />{' '}
          {text}
          <span className={styles.cursor}>|</span>
        </h1>
        <Button />
      </div>
      <div className={styles.Hero__visual}>
        <Image
          alt='julian aijal'
          src={myIllustration}
          priority={true}
          sizes='100vw'
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
