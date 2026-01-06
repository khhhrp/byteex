import styles from "./MainButton.module.scss";

const MainButton = (props) => {
  const { type, children } = props;

  return (
    <button type={type} className={styles.mainBtn}>
      {children}
    </button>
  );
};

export default MainButton;
