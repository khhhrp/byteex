import { memo } from "react";
import { useMediaQuery } from "react-responsive";
import hero01 from "../../assets/images/hero01.webp";
import hero02 from "../../assets/images/hero02.webp";
import hero04 from "../../assets/images/hero04.webp";
import { Container } from "../Container/Container";
import styles from "./AboutSection.module.scss";
import { AboutSectionContent } from "./AboutSectionContent";
import { content } from "./staticContent";

type Props = {
  leftImg?: string;
  mainImg?: string;
  rightImg?: string;
  title?: string;
  text?: string;
};

export const AboutSection = memo((props: Props) => {
  const {
    leftImg = hero01,
    mainImg = hero02,
    rightImg = hero04,
    title = content.title,
    text = content.text
  } = props;

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  return (
    <section className={styles.aboutSection}>
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
          {isMobile ? (
            <AboutSectionContent title={title} text={text} />
          ) : (
            <div className={styles.aboutSection__content}>
              <AboutSectionContent title={title} text={text} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
});
