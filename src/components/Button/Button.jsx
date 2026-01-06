import styles from "./Button.module.scss";

const Button = (props) => {
  const { type } = props;

  return (
    <button type={type} className={styles.button}>
      button
    </button>
  );
};

export default Button;
