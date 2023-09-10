import styles from '../styles/ArticleSlider.module.scss';
import { IArticles } from './_interfaces/interfaces';

const ArticleSlider: React.FC<IArticles> = ({ articles }) => {
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
