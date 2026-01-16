import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import styles from "./AboutSection.module.scss";
import hero01 from "../../assets/images/hero01.webp";
import hero02 from "../../assets/images/hero02.webp";
import hero04 from "../../assets/images/hero04.webp";
import { content } from "./staticContent";
import { memo } from "react";

export const AboutSection = memo((props) => {
  const {
    leftImg = hero01,
    mainImg = hero02,
    rightImg = hero04,
    title = content.title,
    text = content.text
  } = props;

  return (
    <div className={styles.aboutSection}>
      <Container>
        <div className={styles.aboutSection__wrapper}>
          <div className={styles.aboutSection__gallery}>
            <div className={styles.aboutSection__item}>
              <img src={leftImg} alt="" />
            </div>
            <img src={mainImg} alt="" />
            <div className={styles.aboutSection__item}>
              <img src={rightImg} alt="" />
            </div>
          </div>
          <div className={styles.aboutSection__content}>
            <h2 className={styles.aboutSection__title}>{title}</h2>
            <p className={styles.aboutSection__text}>{text}</p>
            <div className={styles.aboutSection__btn}>
              <MainButton />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});
