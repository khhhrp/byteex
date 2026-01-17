import { MainButton } from "../MainButton/MainButton";
import styles from "./AboutSection.module.scss";

type Props = {
  title: string;
  text: string;
};

export const AboutSectionContent = (props: Props) => {
  const { title, text } = props;

  return (
    <>
      <h2 className={styles.aboutSection__title}>{title}</h2>
      <p className={styles.aboutSection__text}>{text}</p>
      <div className={styles.aboutSection__btn}>
        <MainButton />
      </div>
    </>
  );
};
