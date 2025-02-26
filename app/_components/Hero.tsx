'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import myIllustration from '../../public/assets/julian.svg';
import { Button } from '.';
import useInViewFade from '../hooks/useInViewFade';
import { ReactScan } from '../_lib/ReactScan';
const Hero = () => {
  const { ref, isVisible, targetEl } = useInViewFade();

  const words = useMemo(
    () => ['Digital Marketer', 'SEO Specialist', 'Web Developer'],
    [],
  );
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseTime = 2000;
    const handelBackSpacing = () => {
      const timer = setTimeout(
        () => {
          if (isDeleting) {
            setText((prevText) => prevText.slice(0, -1));
            if (text.length === 0) {
              setIsDeleting(false);
              setWordIndex((prevIndex) => prevIndex + 1);
            }
          } else {
            if (text.length === currentWord.length) {
              setTimeout(() => setIsDeleting(true), pauseTime);
              return;
            }
            setText(currentWord.slice(0, text.length + 1));
          }
        },
        isDeleting ? deleteSpeed : typeSpeed,
      );

      return () => clearTimeout(timer);
    };

    handelBackSpacing();
  }, [text, isDeleting, wordIndex, words]);

  return (
    <>
      <ReactScan />
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
            Hi, I&apos;m <span className={styles.name}>Julian</span>, <br />{' '}
            {text}
            <span className={styles.cursor}>|</span>
          </h1>
          <Button />
        </div>
        <div className={styles.Hero__visual}>
          <Image
            alt="julian aijal"
            src={myIllustration}
            priority={true}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            quality={85}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '800px',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
