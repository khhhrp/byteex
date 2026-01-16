import styles from "./RatingInfo.module.scss";
import { Icon } from "../Icon/Icon";
import { starsArr } from "../Comment/staticContent";
import { memo } from "react";

export const RatingInfo = memo((props) => {
  const { text = "Over 500+ 5 Star Reviews Online" } = props;

  return (
    <div className={styles.ratingInfo}>
      <div className={styles.ratingInfo__stars}>
        {starsArr.map((item, id) => {
          return <Icon name="star" key={id} size="14" />;
        })}
      </div>
      <div className={styles.ratingInfo__text}>{text}</div>
    </div>
  );
});
