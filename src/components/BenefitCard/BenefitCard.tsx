import { Icon } from "../Icon/Icon";
import styles from "./BenefitCard.module.scss";
import { memo } from "react";

type Props = {
  icon: string;
  size: string;
  title: string;
  text: string;
};

export const BenefitCard = memo((props: Props) => {
  const { icon, size, title, text } = props;

  return (
    <article className={styles.benefitCard}>
      <div className={styles.benefitCard__circle}>
        <Icon name={icon} size={size} />
      </div>
      <h4 className={styles.benefitCard__title}>{title}</h4>
      <p className={styles.benefitCard__text}>{text}</p>
    </article>
  );
});
