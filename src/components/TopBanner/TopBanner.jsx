import styles from "./TopBanner.module.scss";

const TopBanner = (props) => {
  const { text } = props;

  return (
    <div className={styles.topBanner}>
      <span classNames={styles.topBanner__text}>{text}</span>
    </div>
  );
};

export default TopBanner;
