export type IArticles = {
  articles: {
    id: string;
    title: string;
    subtitle?: string;
    image?: string | null;
    cta: string;
    url: string;
  }[];
};

export type IShowcase = {
  entries: {
    id: string;
    title: string;
    content: string | null;
    subContent: string;
    image: string;
    featuredImg: string;
    published: boolean;
    authorId: string | null;
    url: string;
    subUrl: string;
  }[];
};
