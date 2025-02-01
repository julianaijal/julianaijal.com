import { NavBar, Footer } from "../../_components";
import styles from "../../styles/Article.module.scss";
import apiFunctions from "../../utils/api";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { IArticleDynamic } from "../../_components/_interfaces/interfaces";
import Image from "next/image";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const data = await apiFunctions.fetchArticleBySlug(slug);

  const metadata: Metadata = {
    title: data?.title,
    description: data?.subtitle || '',
  };

  if (data?.canonicalReference && data?.canonicalLink) {
    metadata.alternates = {
      canonical: data.canonicalLink
    };
  }

  return metadata;
}

const Page = async ({ params }: IArticleDynamic) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const data = await apiFunctions.fetchArticleBySlug(slug);
    const content = data.content.html;
    const headerImg = data.headerImage.url;
    console.log(headerImg)
    const window = new JSDOM("").window;
    const domPurify = DOMPurify(window);
    const sanitizedHtml = domPurify.sanitize(content);
    return (
      <>
        <NavBar />
        <main className={styles.Article}>
          <header>
            <h1 className={styles.ArticleTitle}>{data?.title}</h1>
          </header>
          {headerImg && (
            <div className={styles.ArticleHeaderImage}>
              <Image
                priority
                quality={95}
                width={1400}
                height={800}
                src={data.headerImage.url}
                alt={data?.title}
                className={styles.headerImg}
              />
            </div>
          )}
          <div className={styles.ArticleWrapper}>
          {data?.canonicalReference && data?.canonicalLink && (
              <p className={styles.ArticleCanonical}>
                This article was originally published at{' '}
                <a href={data.canonicalLink} target="_blank" rel="noopener noreferrer">
                  {new URL(data.canonicalLink).hostname}
                </a>
              </p>
            )}
          <article
            className={`wrapper ${styles.ArticleContent}`}
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
          </div>

          
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching article:", error);

    return (
      <>
        <NavBar />
        <main className={styles.Article}>
          <h1 className={styles.ArticleTitle}>Error</h1>
          <p className={styles.ArticleContent}>
            Could not fetch the article. Sad.
          </p>
        </main>
        <Footer />
      </>
    );
  }
};

export default Page;
