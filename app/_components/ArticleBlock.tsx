'use client';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';
const ArticleBlock = ({ ...articles }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;
  return (
    <>
      {width! < breakpoint ? (
        <ArticleSlider {...articles} />
      ) : (
        <ArticleList {...articles} />
      )}
    </>
  );
};

export default ArticleBlock;
