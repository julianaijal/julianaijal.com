import { NavBar, Footer } from '../_components';
import styles from '../styles/Articles.module.scss';
import apiFunctions from '../utils/api';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | Julian Aijal',
  description: 'Articles written by Julian Aijal',
};

interface Article {
  title: string;
  slug: string;
  subtitle?: string;
  headerImage?: {
    url: string;
    width: number;
    height: number;
  };
}

const Page = async () => {
  const { data } = await apiFunctions.fetchArticles();
  const articles: Article[] = data?.articles ?? [];

  return (
    <>
      <NavBar />
      <main className={styles.Articles}>
        <header className={styles.ArticlesHeader}>
          <h1 className={styles.ArticlesTitle}>Articles</h1>
        </header>
        <div className={styles.ArticlesGrid}>
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/articles/${article.slug}`}
              className={styles.ArticlesCard}
            >
              {article.headerImage?.url ? (
                <div className={styles.ArticlesCardImageWrapper}>
                  <Image
                    src={article.headerImage.url}
                    alt={article.title}
                    width={article.headerImage.width}
                    height={article.headerImage.height}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={styles.ArticlesCardImage}
                  />
                </div>
              ) : null}
              <div className={styles.ArticlesCardContent}>
                <h2 className={styles.ArticlesCardTitle}>{article.title}</h2>
                {article.subtitle && (
                  <p className={styles.ArticlesCardSubtitle}>
                    {article.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
