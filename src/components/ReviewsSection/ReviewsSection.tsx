import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { ReviewSlider } from "../ReviewSlider/ReviewSlider";
import styles from "./ReviewsSection.module.scss";
import { usersDesktopL, usersDesktopM, usersMobile } from "./staticContent";
import type { CSSProperties } from "react";

type Props = {
  title?: string;
  text?: string;
};

const getGridItems = (isMobile: boolean, isLargeScreen: boolean) => {
  if (isMobile) return usersMobile;
  if (isLargeScreen) return usersDesktopL;
  return usersDesktopM;
};

export const ReviewsSection = (props: Props) => {
  const {
    title = "What are our fans saying?",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus."
  } = props;

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1440px)"
  });

  const items = getGridItems(isMobile, isLargeScreen);
  const itemsCount = items.length / 2;

  return (
    <section className={styles.reviewsSection}>
      <Container>
        <div className={styles.reviewsSection__header}>
          <h2 className={styles.reviewsSection__title}>{title}</h2>
          <p className={styles.reviewsSection__text}>{text}</p>
        </div>
      </Container>
      <div
        className={styles.reviewsSection__grid}
        style={{ "--items-count": itemsCount } as CSSProperties}
      >
        {items.map((el, index) => {
          return (
            <div className={styles.reviewsSection__cell} key={index}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </div>
      <Container>
        <ReviewSlider />
      </Container>
      <div className={styles.reviewsSection__actions}>
        <MainButton />
        <RatingInfo />
      </div>
    </section>
  );
};
