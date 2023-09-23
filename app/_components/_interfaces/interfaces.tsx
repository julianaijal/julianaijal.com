export interface IArticle {
  title: string;
  image?: string | null;
  cta: string;
  url: string;
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
