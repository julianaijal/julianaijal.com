"use client";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ArticleList, ArticleSlider } from "./";
import { IArticles } from "./_interfaces/interfaces";
import { FC, useState, useEffect } from "react";

const ArticleBlock: FC<IArticles> = ({ articles, hygraph }) => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;

  return (
    <>
      {width! < breakpoint ? (
        <ArticleSlider hygraph={hygraph} articles={articles} />
      ) : (
        <ArticleList hygraph={hygraph} articles={articles} />
      )}
    </>
  );
};

export default ArticleBlock;
