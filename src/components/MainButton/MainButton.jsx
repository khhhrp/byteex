import styles from "./MainButton.module.scss";
import Icon from "../Icon/Icon";

const MainButton = (props) => {
  const { type, children } = props;

  return (
    <button type={type} className={styles.mainBtn}>
      <span className={styles.mainBtn__text}>{children}</span>
      <div className={styles.mainBtn__icon}>
        <Icon name="arrow-right" size="23" />
      </div>
    </button>
  );
};

export default MainButton;
