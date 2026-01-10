import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import PaginationButton from "./PaginationButton";
import { getSlide } from "./utils";

const Slider = (props) => {
  const {
    items = [],
    startIndex = 0,
    showPagination = false,
    onSlideChange,
    children,
    controlBtns = false,
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
      {controlBtns && (
        <>
          <button type="button" onClick={onNextButtonClick}>
            next
          </button>
          <button type="button" onClick={onPrevButtonClick}>
            prev
          </button>
        </>
      )}
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
