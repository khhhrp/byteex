import styles from "./Comment.module.scss";
import { Icon } from "../Icon/Icon";
import { img, starsArr } from "./staticContent";

export const Comment = (props) => {
  const { avatarImg = img, text, name } = props;

  return (
    <article className={styles.comment}>
      <div className={styles.comment__avatar}>
        <img src={avatarImg} alt="user photo" className={styles.comment__img} />
      </div>
      <div className={styles.comment__rating}>
        {starsArr.map((_, index) => {
          return <Icon name="star" size="10" key={index} />;
        })}
      </div>
      <h3 className={styles.comment__title}>
        One of 500+ 5 Star Reviews Online
      </h3>
      <span className={styles.comment__name}>{name}</span>
      <p className={styles.comment__text}>{text}</p>
    </article>
  );
};
