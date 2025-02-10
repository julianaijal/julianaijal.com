interface SchemaArticleProps {
  title: string;
}

const SchemaArticle = ({ 
  title,

}: SchemaArticleProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "name": title,
        })
      }}
    />
  );
};

export default SchemaArticle;
