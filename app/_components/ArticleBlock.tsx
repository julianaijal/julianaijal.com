'use client';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';
import { IArticleCollection } from './_interfaces/interfaces';
import { FC } from 'react';

const ArticleBlock: FC<IArticleCollection> = ({ articles }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;

  return (
    <>
      {(width ?? Infinity) < breakpoint ? (
        <ArticleSlider articles={articles} />
      ) : (
        <ArticleList articles={articles} />
      )}
    </>
  );
};

export default ArticleBlock;
