"use client";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ArticleList, ArticleSlider } from "./";
import { IArticles } from "./_interfaces/interfaces";
import { FC } from "react";

const ArticleBlock: FC<IArticles> = ({ articles, articlesnew }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;

  return (
    <>
      {(width ?? Infinity) < breakpoint ? (
        // todo: fix props passed to old naming {articles instead of articlesnew}
        <ArticleSlider articles={articles} articlesnew={articlesnew} />
      ) : (
        <ArticleList articles={articles} articlesnew={articlesnew} />
      )}
    </>
  );
};

export default ArticleBlock;
