import cx from "classnames";
import { memo, useState } from "react";
import type { ButtonType } from "../..";
import styles from "./AccordionItem.module.scss";

type Props = {
  title: string;
  text: string;
} & ButtonType;

export const AccordionItem = memo((props: Props) => {
  const { title, text, type = "button" } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      type={type}
      onClick={toggleClass}
      className={cx(styles.accordionItem, {
        [styles.accordionItem_open]: isOpen
      })}
    >
      <span className={styles.accordionItem__title}>
        {title}
        <span className={styles.accordionItem__decor}></span>
      </span>
      <span className={styles.accordionItem__textBlock}>
        <span className={styles.accordionItem__text}>{text}</span>
      </span>
    </button>
  );
});
