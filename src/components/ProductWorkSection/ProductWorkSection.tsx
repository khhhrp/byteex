import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import styles from "./ProductWorkSection.module.scss";
import { productCards, type ProductCardType } from "./staticContent";
import { ProductCard } from "../ProductCard/ProductCard";
import { Slider } from "../Slider/Slider";
import { useState } from "react";

type Props = {
  title?: string;
  cards?: ProductCardType[];
};

export const ProductWorkSection = (props: Props) => {
  const { title = "Comfort made easy", cards = productCards } = props;
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliderCard = cards[sliderIndex];

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  return (
    <section className={styles.productWorkSection}>
      <Container>
        <div className={styles.productWorkSection__wrapper}>
          <h2 className={styles.productWorkSection__title}>{title}</h2>
          {!isMobile ? (
            <div className={styles.productWorkSection__cards}>
              {cards.map((el, index) => {
                return (
                  <ProductCard
                    key={index}
                    iconName={el.icon}
                    iconSize={el.size}
                    title={el.title}
                    text={el.text}
                    isAccent={el.isAccent}
                  />
                );
              })}
            </div>
          ) : (
            <div className={styles.productWorkSection__slider}>
              <Slider
                items={cards}
                onSlideChange={(index) => setSliderIndex(index)}
              >
                <div className={styles.productWorkSection__sliderMain}>
                  <ProductCard
                    iconName={sliderCard.icon}
                    iconSize={sliderCard.size}
                    title={sliderCard.title}
                    text={sliderCard.text}
                  />
                </div>
              </Slider>
            </div>
          )}
          <div className={styles.productWorkSection__actions}>
            <MainButton />
            <RatingInfo />
          </div>
        </div>
      </Container>
    </section>
  );
};
