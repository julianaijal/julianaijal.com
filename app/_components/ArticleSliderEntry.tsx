import styles from "../styles/ArticleSlider.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "./_interfaces/interfaces";
import { FC } from "react";

const ArticleSliderEntry: FC<IArticle> = ({ title, slug }) => {
  return (
    <div className={styles.ArticleSliderEntry}>
      <div className={styles.ArticleSliderCard}>
        <div className={styles.ArticleSliderCardCta}>
          <div className={styles.ArticleSliderCardImg}>
            {/* Add symbol img in hygraph */}
            {/* {symbol?.url && ( */}
              <Image alt={title} src="https://eu-central-1-shared-euc1-02.graphassets.com/clw38qc4e0h4s07waaosde8sy/clw3wfy1r36ak08usvt8aamla" sizes="100vw" width={48} height={48} />
            {/* )} */}
          </div>
          {slug && (
            <div className={styles.ArticleSliderCardBtnWrapper}>
              <div className={styles.ArticleSliderCardBtn}>
                <Link
                  rel="noopener"
                  href={`/articles/${slug}`}
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
