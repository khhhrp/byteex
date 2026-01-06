import styles from "./Logo.module.scss";

const Logo = (props) => {
  const { className } = props;

  return (
    <a href="/" className={`${styles.logo} ${className || ""}`.trim()}>
      <img
        src="../../../src/assets/icons/logo.svg"
        alt="logo"
        className={styles.logoImg}
      />
    </a>
  );
};

export default Logo;
