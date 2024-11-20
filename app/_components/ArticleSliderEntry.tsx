import styles from "../styles/ArticleSlider.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "./_interfaces/interfaces";
import { FC } from "react";

const ArticleSliderEntry: FC<IArticle> = ({ title, url, symbol }) => {
  return (
    <div className={styles.ArticleSliderEntry}>
      <div className={styles.ArticleSliderCard}>
        <div className={styles.ArticleSliderCardCta}>
          <div className={styles.ArticleSliderCardImg}>
            {symbol?.url && (
              <Image
                alt={title}
                src={symbol.url}
                sizes="100vw"
                width={48}
                height={48}
              />
            )}
          </div>
          {url && (
            <div className={styles.ArticleSliderCardBtnWrapper}>
              <div className={styles.ArticleSliderCardBtn}>
                <Link
                  rel="noopener"
                  href={url}
                  className={styles.ArticleSliderCardLink}
                >
                  Read more
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className={styles.ArticleSliderCardCopy}>
          <h3 className={styles.ArticleSliderCardTitle}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleSliderEntry;
