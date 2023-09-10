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
