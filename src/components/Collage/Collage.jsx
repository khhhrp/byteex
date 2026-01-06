import styles from "./Collage.module.scss";

const Collage = (props) => {
  const { className, firstImg, secondImg, thirdImg } = props;

  return (
    <div className={`${styles.collage} ${className || ""}`.trim()}>
      <div className={styles.collageDecor}></div>
      <div className={styles.collageItem}>
        <img src={firstImg} alt="photo" className={styles.collageImg} />
      </div>
      <div className={styles.collageItem}>
        <img src={secondImg} alt="photo" className={styles.collageImg} />
      </div>
      <div className={styles.collageItem}>
        <img src={thirdImg} alt="photo" className={styles.collageImg} />
      </div>
      <div className={styles.collageDecor}></div>
    </div>
  );
};

export default Collage;
