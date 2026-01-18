import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import styles from "./BenefitsSection.module.scss";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { cardsStatic, type Card } from "../BenefitCard/staticContent";
import { images } from "../Slider/staticContent";
import { BenefitCard } from "../BenefitCard/BenefitCard";
import { Slider } from "../Slider/Slider";

type Props = {
  cards?: Card[];
};

export const BenefitsSection = (props: Props) => {
  const { cards = cardsStatic } = props;

  const [slideIndexImages, setSlideIndexImages] = useState(0);
  const img: string = images[slideIndexImages];

  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.benefitsSection__background} />
        <h3 className={styles.benefitsSection__subtitle}>as seen in</h3>
        <div className={styles.benefitsSection__content}>
          <div className={styles.benefitsSection__inner}>
            <h2 className={styles.benefitsSection__title}>
              Loungewear you can be proud of.
            </h2>
            <div className={styles.benefitsSection__cards}>
              {cards.map((item, id) => {
                const { icon, size, title, text } = item;
                return (
                  <div className={styles.benefitsSection__card} key={id}>
                    <BenefitCard
                      icon={icon}
                      size={size}
                      title={title}
                      text={text}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.benefitsSection__slider}>
            <Slider
              startIndex={1}
              onSlideChange={(index) => setSlideIndexImages(index)}
              items={images}
              showPagination
            >
              <img src={img} alt="" />
            </Slider>
            <p className={styles.benefitsSection__text}>White Robe</p>
          </div>
          {isMobile && (
            <div className={styles.benefitsSection__actions}>
              <MainButton />
              <RatingInfo />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
