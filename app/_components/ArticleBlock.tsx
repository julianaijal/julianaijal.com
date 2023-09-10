'use client';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';
import { IArticles } from './_interfaces/interfaces';

const ArticleBlock: React.FC<IArticles> = ({ articles }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;
  return (
    <>
      {width! < breakpoint ? (
        <ArticleSlider articles={articles} />
      ) : (
        <ArticleList articles={articles} />
      )}
    </>
  );
};

export default ArticleBlock;
