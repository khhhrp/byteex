import { memo } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./InfoCard.module.scss";
import cx from "classnames";
import { InfoCardVariant, type InfoCardType } from "./types";

type Props = InfoCardType;
const variantsClass = {
  [InfoCardVariant.Default]: styles.infoCard_default,
  [InfoCardVariant.Minimal]: styles.infoCard_minimal
};

export const InfoCard = memo((props: Props) => {
  const { icon, title, description, variant = InfoCardVariant.Default } = props;

  const isDefault = variant === InfoCardVariant.Default;
  const showTitle = title && isDefault;
  const iconSize = isDefault ? "30" : "24";

  return (
    <article className={cx(styles.infoCard, variantsClass[variant])}>
      <div className={styles.infoCard__icon}>
        <Icon name={icon} size={iconSize} />
      </div>
      {showTitle && <h2 className={styles.infoCard__title}>{title}</h2>}
      <h3 className={styles.infoCard__description}>{description}</h3>
    </article>
  );
});
