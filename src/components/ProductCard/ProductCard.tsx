import { Icon } from "../Icon/Icon";
import styles from "./ProductCard.module.scss";
import cx from "classnames";

type Props = {
  iconName: string;
  iconSize: string;
  title: string;
  text: string;
  isAccent?: boolean;
};

export const ProductCard = (props: Props) => {
  const { iconName, iconSize, title, text, isAccent = false } = props;

  return (
    <article
      className={cx(styles.productCard, {
        [styles.productCard_accent]: isAccent
      })}
    >
      <div className={styles.productCard__icon}>
        <Icon name={iconName} size={iconSize} />
      </div>
      <h3 className={styles.productCard__title}>{title}</h3>
      <p className={styles.productCard__text}>{text}</p>
    </article>
  );
};
