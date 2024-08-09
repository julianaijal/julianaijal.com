export interface IArticle {
  title: string;
  url: string;
  image?: string | null;
  cta?: string;
  symbol?: string;
}

export interface IShowcaseEntry {
  title: string;
}

export interface IArticles {
  articles: IArticle[];
}

export interface IShowcase {
  entries: IShowcaseEntry[];
}
