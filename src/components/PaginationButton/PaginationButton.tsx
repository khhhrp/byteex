import { motion } from "motion/react";
import styles from "./PaginationButton.module.scss";
import { memo } from "react";
import type { CallBack } from "../..";

type Props = {
  src: string;
  isActive: boolean;
  id: string | number;
  onClick: CallBack;
};

export const PaginationButton = memo((props: Props) => {
  const { onClick, src, isActive, id } = props;

  return (
    <button
      type="button"
      data-id={`item-${id}`}
      onClick={onClick}
      className={styles.paginationButton}
    >
      {isActive && (
        <motion.div
          layoutId={`item-${id}`}
          className={styles.paginationButton__decor}
        />
      )}
      <img className={styles.paginationButton__img} src={src} alt="" />
    </button>
  );
});
