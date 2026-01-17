import { Container } from "../Container/Container";
import styles from "./TopBanner.module.scss";

type Props = {
  text: string;
};

export const TopBanner = (props: Props) => {
  const { text } = props;

  return (
    <div className={styles.topBanner}>
      <Container>
        <span className={styles.topBanner__text}>{text}</span>
      </Container>
    </div>
  );
};
