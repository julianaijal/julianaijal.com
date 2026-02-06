import styles from '../styles/ArticleBlock.module.scss';
import { ArticleList, ArticleSlider } from './';
import { IArticleCollection } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleBlock: FC<IArticleCollection> = ({ articles }) => {
  return (
    <>
      <div className={styles.mobileOnly}>
        <ArticleSlider articles={articles} />
      </div>
      <div className={styles.desktopOnly}>
        <ArticleList articles={articles} />
      </div>
    </>
  );
};

export default ArticleBlock;
