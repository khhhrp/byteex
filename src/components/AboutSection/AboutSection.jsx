import Container from "../Container/Container";
import styles from "./AboutSection.module.scss";
import hero01 from "../../assets/images/hero01.webp";
import hero02 from "../../assets/images/hero02.webp";
import hero04 from "../../assets/images/hero04.webp";
import { content } from "./staticContent";

const AboutSection = (props) => {
  const { leftImg = hero01, mainImg = hero02, rightImg = hero04 } = props;

  return (
    <div className={styles.aboutSection}>
      <Container>
        <div className={styles.aboutSection__wrapper}>
          <h2 className={styles.aboutSection__title}>Be your best self.</h2>.
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
            {content.map((el, index) => {
              return (
                <p key={index} className={styles.aboutSection__text}>
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
