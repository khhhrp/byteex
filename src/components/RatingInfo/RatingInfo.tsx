import { memo } from "react";
import { starsArr } from "../Comment/staticContent";
import { Icon } from "../Icon/Icon";
import styles from "./RatingInfo.module.scss";

type Props = {
  text?: string;
};

export const RatingInfo = memo((props: Props) => {
  const { text = "Over 500+ 5 Star Reviews Online" } = props;

  return (
    <div className={styles.ratingInfo}>
      <div className={styles.ratingInfo__stars}>
        {starsArr.map((_, id) => {
          return <Icon name="star" key={id} size="14" />;
        })}
      </div>
      <div className={styles.ratingInfo__text}>{text}</div>
    </div>
  );
});
