/**
 * Represents an article with metadata
 */
export interface IArticle {
  title: string;
  slug: string;
  url: string;
  image: string | null;
  cta?: string;
  symbol?: {
    url: string;
  };
}

/**
 * Represents a showcase entry
 */
export interface IShowcaseEntry {
  title: string;
}

/**
 * Represents a collection of articles
 */
export interface IArticleCollection {
  articles: IArticle[];
}

/**
 * Represents a collection of showcase entries
 */
export interface IShowcase {
  entries: IShowcaseEntry[];
}

/**
 * Represents article schema with rich content and metadata
 */
export interface ISchemaArticle {
  title: string;
  slug: string;
  createdBy: {
    id: string;
    name: string;
  };
  subtitle: string;
  content: {
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
}
