import { motion } from "motion/react";
import { memo } from "react";
import type { ButtonType, CallBack } from "../..";
import styles from "./PaginationButton.module.scss";

type Props = {
  type?: ButtonType;
  src: string;
  isActive: boolean;
  id: string | number;
  onClick: CallBack;
};

export const PaginationButton = memo((props: Props) => {
  const { type = "button", onClick, src, isActive, id } = props;

  return (
    <button
      type={type}
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
