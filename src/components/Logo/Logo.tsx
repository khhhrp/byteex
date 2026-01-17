import logo from "../../../src/assets/icons/logo.svg";
import styles from "./Logo.module.scss";

type Props = {
  src?: string;
};

export const Logo = (props: Props) => {
  const { src = logo } = props;

  return (
    <a href="/" className={styles.logo}>
      <img src={src} alt="logo" className={styles.logo__img} />
    </a>
  );
};
