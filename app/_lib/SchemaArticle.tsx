import { ISchemaArticle } from '../_components/_interfaces/interfaces';


const stripHtmlTags = (html?: string) => {
   if (!html) return "";
   return html
   .replace(/<\/?[^>]+(>|$)/g, "")
   .replace(/\\n|\\t|\\r/g, " ")
   .replace(/\s+/g, " ")
   .trim();
};

const decodeEscapedChars = (str: string) => {
   return str.replace(/\\n/g, "\n").replace(/\\t/g, "\t").replace(/\\r/g, "");
 }

const SchemaArticle = ({ 
  title,
  subtitle,
  content,
  headerImage,
  canonicalLink,
  createdBy,
  slug
}: ISchemaArticle ) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://julianaijal.com';
  const articleUrl = `${baseUrl}/articles/${slug}`;

  const imageObject = headerImage ? {
    "@type": "ImageObject",
    "url": headerImage.url,
    "width": headerImage.width || 1200,
    "height": headerImage.height || 630
  } : undefined;

  const authorObject = {
    "@type": "Person",
    "name": createdBy?.name,
    "url": baseUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": articleUrl,
          "url": articleUrl,
          "name": title,
          "headline": title,
          "description": subtitle,
          "articleBody": content?.text ? decodeEscapedChars(stripHtmlTags(content.text)) : "",
          "image": imageObject,
          "author": authorObject,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalLink || articleUrl
          },
          "publisher": {
            "@type": "Person",
            "name": createdBy?.name,
            "url": baseUrl
          },
          "inLanguage": "en-US"
        })
      }}
    />
  );
};

export default SchemaArticle;
