import styles from "./PaginationButton.module.scss";
import cx from "classnames";

const PaginationButton = (props) => {
  const { onClick, src, isActive } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.paginationButton, {
        [styles.paginationButton_active]: isActive,
      })}
    >
      <img className={styles.paginationButton__img} src={src} alt="" />
    </button>
  );
};

export default PaginationButton;
