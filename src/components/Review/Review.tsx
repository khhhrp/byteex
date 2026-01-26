import { memo } from "react";
import { starsArr } from "../Comment/staticContent";
import { Icon } from "../Icon/Icon";
import styles from "./Review.module.scss";

type Props = {
  name: string;
  img: string;
  text: string;
};

export const Review = memo((props: Props) => {
  const { name, img, text } = props;

  return (
    <article className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__avatar}>
          <img src={img} alt="" />
        </div>
        <div className={styles.review__group}>
          <div className={styles.review__rating}>
            {starsArr.map((_, index) => {
              return <Icon name="star" size="10" key={index} />;
            })}
          </div>
          <h2 className={styles.review__name}>{name}</h2>
        </div>
      </div>
      <p className={styles.review__text}>{text}</p>
    </article>
  );
});
