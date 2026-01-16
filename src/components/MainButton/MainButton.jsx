import styles from "./MainButton.module.scss";
import { Icon } from "../Icon/Icon";
import { memo } from "react";

export const MainButton = memo((props) => {
  const { type = "button", children = "Customize Your Outfit" } = props;

  return (
    <button type={type} className={styles.mainBtn}>
      <span className={styles.mainBtn__text}>{children}</span>
      <div className={styles.mainBtn__icon}>
        <Icon name="arrow-right" size="23" />
      </div>
    </button>
  );
});
