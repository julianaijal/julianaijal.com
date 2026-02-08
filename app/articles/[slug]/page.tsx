import { NavBar, Footer } from '../../_components';
import styles from '../../styles/Article.module.scss';
import apiFunctions from '../../utils/api';
import DOMPurify from 'isomorphic-dompurify';
import html, { DOMNode, Element, domToReact } from 'html-react-parser';
import Image from 'next/image';
import { Metadata } from 'next';
import SchemaArticle from '../../_lib/SchemaArticle';

const getArticleData = async (slug: string) => {
  const data = await apiFunctions.fetchArticleBySlug(slug);
  return data;
};

export async function generateStaticParams() {
  const data = await apiFunctions.fetchArticles();
  return (data?.data?.articles ?? []).map((article: { slug: string }) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticleData(slug);

  const metadata: Metadata = {
    title: data?.title,
    description: data?.subtitle || '',
  };

  metadata.alternates = {
    canonical: data?.canonicalReference && data?.canonicalLink
      ? data.canonicalLink
      : `https://julianaijal.com/articles/${slug}`,
  };

  if (data?.headerImage?.url) {
    metadata.openGraph = {
      title: data.title,
      description: data.subtitle || '',
      images: [{ url: data.headerImage.url, width: data.headerImage.width, height: data.headerImage.height }],
    };
    metadata.twitter = {
      card: 'summary_large_image',
      title: data.title,
      description: data.subtitle || '',
      images: [data.headerImage.url],
    };
  }

  return metadata;
}

const replaceImgWithNextImage = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.name === 'img') {
      const { src, alt, width, height } = domNode.attribs;
      if (!src) return;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={parseInt(width, 10) || 800}
          height={parseInt(height, 10) || 600}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1080px) 80vw, 800px"
          style={{ width: '100%', height: 'auto' }}
        />
      );
    }
  },
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const data = await getArticleData(slug);
    const content = data.content.html;
    const headerImg = data.headerImage.url;
    const sanitizedHtml = DOMPurify.sanitize(content);
    const parsedHtml = html(sanitizedHtml, replaceImgWithNextImage);
    return (
      <>
        <SchemaArticle
          title={data.title}
          subtitle={data.subtitle}
          content={data.content}
          headerImage={data.headerImage}
          canonicalReference={data.canonicalReference}
          canonicalLink={data.canonicalLink}
          slug={slug}
          createdBy={data.createdBy}
        />
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
            {data?.canonicalReference && data?.canonicalLink ? (
              <p className={styles.ArticleCanonical}>
                This article was originally published at{' '}
                <a
                  href={data.canonicalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {new URL(data.canonicalLink).hostname}
                </a>
              </p>
            ) : data?.publishedAt ? (
              <p className={styles.ArticlePublished}>
                {new Date(data.publishedAt).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            ) : null}
            <article className={`wrapper ${styles.ArticleContent}`}>
              <section className={styles.ArticleContentInner}>
                {parsedHtml}
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Error fetching article:', error);

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
