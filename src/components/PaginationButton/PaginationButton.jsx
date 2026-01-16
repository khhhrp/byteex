import { motion } from "motion/react";
import { memo } from "react";
import styles from "./PaginationButton.module.scss";

export const PaginationButton = memo((props) => {
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
