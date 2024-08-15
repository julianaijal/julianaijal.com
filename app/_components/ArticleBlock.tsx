"use client";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ArticleList, ArticleSlider } from "./";
import { IArticles } from "./_interfaces/interfaces";
import { FC } from "react";

const ArticleBlock: FC<IArticles> = ({ articles }) => {
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
