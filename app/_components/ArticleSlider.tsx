import styles from '../styles/ArticleSlider.module.scss';

interface ArticleSlideProps {
  articles: {
    id: string;
    title: string;
    subtitle?: string;
    image?: string | null;
    cta: string;
    url: string;
  }[];
}

const ArticleSlider: React.FC<ArticleSlideProps> = ({articles}) => {
  console.log(articles);
  return (
    <>
      {articles.map((article, index) => (
        <li key={index}>{article.title}</li>
      ))}
    </>
  );
};

export default ArticleSlider;
