import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import styles from "./LogoSlider.module.scss";
import { logosDesktop, logosMobile } from "./staticContent";
import { memo } from "react";

const settings = {
  dots: true,
  dotsClass: styles.logoSlider__dots,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false
};

export const LogoSlider = memo(() => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  return (
    <div className={styles.logoSlider}>
      {isMobile && (
        <Slider {...settings}>
          {logosMobile.map((el, index) => {
            return (
              <div className={styles.logoSlider__slide} key={index}>
                <img src={el} alt="" className={styles.logoSlider__img} />
              </div>
            );
          })}
        </Slider>
      )}
      {!isMobile && (
        <div className={styles.logoSlider__wrapper}>
          {logosDesktop.map((el, index) => {
            return (
              <div className={styles.logoSlider__slide} key={index}>
                <img src={el} alt="" className={styles.logoSlider__img} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
