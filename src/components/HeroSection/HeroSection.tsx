import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import styles from "./HeroSection.module.scss";
import { Logo } from "../Logo/Logo";
import { getContent } from "../Comment/staticContent";
import { images, items } from "./staticContent";
import { Collage } from "../Collage/Collage";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import { Comment } from "../Comment/Comment";
import { MainButton } from "../MainButton/MainButton";

export const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  const content = getContent(isMobile);

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroSection__logo}>
          <Logo />
        </div>
        <div className={styles.heroSection__wrapper}>
          <div className={styles.heroSection__inner}>
            <h1 className={styles.heroSection__title}>
              Don’t apologize for being comfortable.
            </h1>
            <div className={styles.heroSection__info}>
              <HeroInfo items={items} />
            </div>
            <div className={styles.heroSection__btn}>
              <MainButton />
            </div>
          </div>
          <div className={styles.heroSection__collage}>
            <Collage images={images} />
          </div>
          <div className={styles.heroSection__comment}>
            <Comment name={content.name} text={content.text} />
          </div>
        </div>
      </Container>
    </section>
  );
};
