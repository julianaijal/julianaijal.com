'use client';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';
import { IArticles } from './_interfaces/interfaces';
import { FC, useState, useEffect } from 'react';
import fetchPosts from '../utils/api';

const ArticleBlock: FC<IArticles> = ({ articles }) => {
  const [data, setData] = useState<any>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchPosts(); 
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      console.log(data, 'test');
    }
  }, [data]);

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
