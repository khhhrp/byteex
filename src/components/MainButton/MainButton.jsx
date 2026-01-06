import styles from "./MainButton.module.scss";

const MainButton = (props) => {
  const { type, className, content } = props;

  return (
    <button type={type} className={`${styles.mainBtn} ${className}`}>
      {content}
    </button>
  );
};

export default MainButton;
