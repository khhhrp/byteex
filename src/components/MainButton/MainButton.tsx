import { memo, type PropsWithChildren } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./MainButton.module.scss";
import type { ButtonType } from "../..";

type Props = PropsWithChildren & ButtonType;

export const MainButton = memo((props: Props) => {
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
