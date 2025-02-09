export interface IArticle {
  title: string;
  slug: string;
  url: string;
  image?: string | null;
  cta?: string;
  symbol?: {
    url: string;
  };
}

export interface IShowcaseEntry {
  title: string;
}

// todo: fix props passed to old naming {articles instead of articlesnew}
export interface IArticles {
  articles: IArticle[];
  articlesnew?:IArticle[];
}

export interface IShowcase {
  entries: IShowcaseEntry[];
}