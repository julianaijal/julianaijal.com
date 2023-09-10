'use client';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';

interface ArticleBlockProps {
  articles: {
    id: string;
    title: string;
    subtitle?: string;
    image?: string | null; // Make 'image' optional here
    cta: string;
    url: string;
  }[];
}

const ArticleBlock: React.FC<ArticleBlockProps> = ({ articles }) => {
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
