import cx from "classnames";
import {
  memo,
  useCallback,
  useEffect,
  useId,
  useState,
  type PropsWithChildren
} from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Slider.module.scss";
import { getSlide } from "./utils";
import { PaginationButton } from "../PaginationButton/PaginationButton";
import type { ProductCardType } from "../ProductWorkSection/staticContent";

type Props = {
  items: string[] | ProductCardType[];
  startIndex?: number;
  showPagination?: boolean;
  onSlideChange: (index: number) => void;
  isFixHeight?: boolean;
} & PropsWithChildren;

export const Slider = memo((props: Props) => {
  const {
    items = [],
    startIndex = 0,
    showPagination = false,
    onSlideChange,
    children,
    isFixHeight = false
  } = props;

  const id = useId();

  const [slideIndex, setSlideIndex] = useState<number>(startIndex);
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
      <div
        className={cx(styles.slider__main, {
          [styles.slider__main_fixH]: isFixHeight
        })}
      >
        {children}
      </div>
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
            if (typeof el === "string") {
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
            }
          })}
        </div>
      )}
    </div>
  );
});
