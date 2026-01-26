import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { Review } from "../Review/Review";
import { reviewsDesktop, reviewsMobile } from "../ReviewsSection/staticContent";
import styles from "./ReviewSlider.module.scss";
import { SliderArrowButton } from "../SliderArrowButton/SliderArrowButton";
import { useRef } from "react";
import type { CallBack } from "../..";
import cx from "classnames";

type Ref = {
  prev?: CallBack;
  next?: CallBack;
};

const defaultSettings = {
  infinite: true,
  speed: 500,
  arrows: false
};

const settingsMobile = {
  ...defaultSettings,
  dots: true,
  dotsClass: styles.reviewSlider__dots,
  slidesToShow: 1,
  slidesToScroll: 1
};

const settingsDesktop = {
  ...defaultSettings,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3
};

export const ReviewSlider = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  const sliderRef = useRef<Ref>({ prev: () => {}, next: () => {} });

  const items = isMobile ? reviewsMobile : reviewsDesktop;
  const sliderConfig = isMobile ? settingsMobile : settingsDesktop;

  return (
    <div className={styles.reviewSlider}>
      <Slider
        ref={(slider) => {
          sliderRef.current.next = slider?.slickNext;
          sliderRef.current.prev = slider?.slickPrev;
        }}
        {...sliderConfig}
      >
        {items.map((el, index) => {
          return (
            <div className={styles.reviewSlider__slide} key={index}>
              <Review name={el.name} img={el.img} text={el.text} />
            </div>
          );
        })}
      </Slider>
      <div
        className={cx(
          styles.reviewSlider__button,
          styles.reviewSlider__button_right
        )}
      >
        <SliderArrowButton
          onClick={() => {
            sliderRef.current?.next?.();
          }}
          iconName="caret-right"
        />
      </div>
      <div
        className={cx(
          styles.reviewSlider__button,
          styles.reviewSlider__button_left
        )}
      >
        <SliderArrowButton
          onClick={() => {
            sliderRef.current?.prev?.();
          }}
          iconName="caret-left"
        />
      </div>
    </div>
  );
};
