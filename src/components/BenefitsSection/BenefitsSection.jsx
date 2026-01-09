import styles from "./BenefitsSection.module.scss";
import BenefitCard from "../BenefitCard/BenefitCard";
import Slider from "../Slider/Slider";
import { useState } from "react";
import { images } from "../Slider/staticContent";
import { cardsStatic } from "../BenefitCard/staticContent";
import MainButton from "../MainButton/MainButton";

const BenefitsSection = (props) => {
  const { cards = cardsStatic } = props;

  const [slideIndexImages, setSlideIndexImages] = useState(0);
  const img = images[slideIndexImages];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsSection__background}></div>
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
        <MainButton>Customize Your Outfit</MainButton>
      </div>
    </section>
  );
};

export default BenefitsSection;
