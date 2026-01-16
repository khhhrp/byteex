import { useState } from "react";
import { BenefitCard } from "../BenefitCard/BenefitCard";
import { cardsStatic } from "../BenefitCard/staticContent";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { Slider } from "../Slider/Slider";
import { images } from "../Slider/staticContent";
import styles from "./BenefitsSection.module.scss";

export const BenefitsSection = (props) => {
  const { cards = cardsStatic } = props;

  const [slideIndexImages, setSlideIndexImages] = useState(0);
  const img = images[slideIndexImages];

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.benefitsSection__background} />
        <h3 className={styles.benefitsSection__subtitle}>as seen in</h3>
        <div className={styles.benefitsSection__content}>
          <h2 className={styles.benefitsSection__title}>
            Loungewear you can be proud of.
          </h2>
          <div className={styles.benefitsSection__slider}>
            <Slider
              startIndex={1}
              onSlideChange={(index) => setSlideIndexImages(index)}
              items={images}
              showPagination
            >
              <img src={img} alt="" />
            </Slider>
          </div>
          <p className={styles.benefitsSection__text}>White Robe</p>
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
          <div className={styles.benefitsSection__mainBtn}>
            <MainButton />
          </div>
          <div className={styles.benefitsSection__raiting}>
            <RatingInfo />
          </div>
        </div>
      </Container>
    </section>
  );
};
