import styles from "./Slider.module.scss";
import { useEffect, useState } from "react";
import PaginationButton from "../PaginationButton/PaginationButton";
import { getSlide } from "./utils";
import cx from "classnames";
import Icon from "../Icon/Icon";

const Slider = (props) => {
  const {
    items = [],
    startIndex = 0,
    showPagination = false,
    onSlideChange,
    children,
  } = props;

  const [slideIndex, setSlideIndex] = useState(startIndex);

  useEffect(() => {
    onSlideChange(slideIndex);
  }, []);

  const { next, prev } = getSlide(slideIndex, items.length - 1);

  const onNextButtonClick = () => {
    setSlideIndex(next);
    onSlideChange(slideIndex);
  };

  const onPrevButtonClick = () => {
    setSlideIndex(prev);
    onSlideChange(slideIndex);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__main}>{children}</div>
      <button
        type="button"
        onClick={onNextButtonClick}
        className={cx(styles.slider__btn, styles.slider__btn_next)}
      >
        <Icon name="carrot-right" size="15" />
      </button>
      <button
        type="button"
        onClick={onPrevButtonClick}
        className={cx(styles.slider__btn, styles.slider__btn_prev)}
      >
        <Icon name="carrot-left" size="15" />
      </button>
      {showPagination && (
        <div className={styles.slider__pagintation}>
          {items.map((el, index) => {
            return (
              <PaginationButton
                key={index}
                isActive={index === slideIndex}
                onClick={() => {
                  setSlideIndex(index);
                  onSlideChange(slideIndex);
                }}
                src={el}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
