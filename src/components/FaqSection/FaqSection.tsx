import { useMediaQuery } from "react-responsive";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import { accordions, type AccordionType } from "../AccordionItem/staticContent";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { images } from "../HeroSection/staticContent";
import styles from "./FaqSection.module.scss";

const [firstImage, secondImage, thirdImage] = images;

type Props = {
  title?: string;
  items?: AccordionType[];
  topImg?: string;
  mainImg?: string;
  bottomImg?: string;
};

export const FaqSection = (props: Props) => {
  const {
    title = "Frequently asked questions.",
    items = accordions,
    topImg = secondImage,
    mainImg = firstImage,
    bottomImg = thirdImage
  } = props;

  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.faqSection__wrapper}>
          <div className={styles.faqSection__content}>
            <h2 className={styles.faqSection__title}>{title}</h2>
            <div className={styles.faqSection__info}>
              {items.map((el: AccordionType, index: number) => {
                return (
                  <AccordionItem title={el.title} text={el.text} key={index} />
                );
              })}
            </div>
          </div>
          {!isMobile && (
            <div className={styles.faqSection__photoBlock}>
              <img src={topImg} alt="" className={styles.faqSection__topImg} />
              <img
                src={mainImg}
                alt=""
                className={styles.faqSection__mainImg}
              />
              <img
                src={bottomImg}
                alt=""
                className={styles.faqSection__bottomImg}
              />
            </div>
          )}
          {isMobile && (
            <div className={styles.faqSection__actions}>
              <MainButton />
              <RatingInfo />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
