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

export interface ISchemaArticle {
  title: string;
  createdBy?: {
    id?: string;
    name?: string;
  }
  subtitle?: string;
  content?: {
    html: string;
    markdown: string;
    text: string;
  };
  headerImage?: {
    url: string;
    width: number;
    height: number;
  };
  canonicalReference?: string;
  canonicalLink?: string;
  slug: string;
}