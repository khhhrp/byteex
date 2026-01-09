import styles from "./TopBanner.module.scss";
import Container from "../Container/Container";

const TopBanner = (props) => {
  const { text } = props;

  return (
    <div className={styles.topBanner}>
      <Container>
        <span className={styles.topBanner__text}>{text}</span>
      </Container>
    </div>
  );
};

export default TopBanner;
