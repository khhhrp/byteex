import cx from "classnames";
import { memo, useCallback, useEffect, useId, useState } from "react";
import { Icon } from "../Icon/Icon";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import styles from "./Slider.module.scss";
import { getSlide } from "./utils";

export const Slider = memo((props) => {
  const {
    items = [],
    startIndex = 0,
    showPagination = false,
    onSlideChange,
    children
  } = props;

  const id = useId();

  const [slideIndex, setSlideIndex] = useState(startIndex);
  const { next, prev } = getSlide(slideIndex, items.length - 1);

  useEffect(() => {
    onSlideChange(slideIndex);
  }, [onSlideChange, slideIndex]);

  const onNextButtonClick = useCallback(() => {
    setSlideIndex(next);
  }, [next]);

  const onPrevButtonClick = useCallback(() => {
    setSlideIndex(prev);
  }, [prev]);

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
                }}
                src={el}
                id={id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
});
