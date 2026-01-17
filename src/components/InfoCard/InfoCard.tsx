import { memo } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./InfoCard.module.scss";

type Props = {
  name: string;
  size: string;
  title: string;
  desc: string;
};

export const InfoCard = memo((props: Props) => {
  const { name, size, title, desc } = props;

  return (
    <article className={styles.infoCard}>
      <div className={styles.infoCard__icon}>
        <Icon name={name} size={size} />
      </div>
      <h2 className={styles.infoCard__title}>{title}</h2>
      <h3 className={styles.infoCard__description}>{desc}</h3>
    </article>
  );
});
