import styles from "./BenefitsSection.module.scss";
import BenefitCard from "../BenefitCard/BenefitCard";
import Slider from "../Slider/Slider";
import { useState } from "react";
import { images, logos } from "../Slider/staticContent";
import { cardsStatic } from "../BenefitCard/staticContent";
import { starsArr } from "../Comment/staticContent";
import MainButton from "../MainButton/MainButton";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import RatingInfo from "../RatingInfo/RatingInfo";

const BenefitsSection = (props) => {
  const { cards = cardsStatic } = props;

  const [slideIndexImages, setSlideIndexImages] = useState(0);
  // const [slideIndexLogos, setSlideIndexLogos] = useState(0);

  const img = images[slideIndexImages];
  // const logo = logos[slideIndexLogos];

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.benefitsSection__background}></div>
        <h3 className={styles.benefitsSection__subtitle}>as seen in</h3>
        {/* <div className={styles.benefitsSection__logos}>
          <Slider
            startIndex={1}
            showPagination
            onSlideChange={(index) => setSlideIndexLogos(index)}
            items={logos}
          >
            <div className={styles.benefitsSection__logosContent}>
              {logos.map((item, id) => {
                return (
                  <div key={id} className={styles.benefitsSection__logosSlide}>
                    <img width="100" height="100" src={item} alt="logo" />
                  </div>
                );
              })}
            </div>
          </Slider>
        </div> */}
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
              <img width="100" height="100" src={img} alt="" />
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
            <MainButton withRaiting>Customize Your Outfit</MainButton>
          </div>
          <div className={styles.benefitsSection__raiting}>
            <RatingInfo />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
