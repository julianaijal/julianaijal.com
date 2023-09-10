import styles from '../styles/ArticleSlider.module.scss';

interface ArticleSlideProps {
  articles: {
    id: string;
    title: string;
    substitle?: string;
    image?: string;
    cta: string;
    url: string;
  }[];
}

const ArticleSlider: React.FC<ArticleSlideProps> = (articles) => {
  return <h2 className={styles.heading}>Article Slider</h2>;
};

export default ArticleSlider;
