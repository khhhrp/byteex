import styles from "./Logo.module.scss";
import logo from "../../../src/assets/icons/logo.svg";

export const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" className={styles.logo__img} />
    </a>
  );
};
