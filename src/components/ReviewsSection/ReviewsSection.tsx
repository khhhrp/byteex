import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import styles from "./ReviewsSection.module.scss";
import {
  reviews,
  usersDesktopL,
  usersDesktopM,
  usersMobile
} from "./staticContent";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { Review } from "../Review/Review";

type Props = {
  title?: string;
  text?: string;
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

  const isMediumScreen = !isMobile && !isLargeScreen;

  return (
    <section className={styles.reviewsSection}>
      <Container>
        <div className={styles.reviewsSection__header}>
          <h2 className={styles.reviewsSection__title}>{title}</h2>
          <p className={styles.reviewsSection__text}>{text}</p>
        </div>
      </Container>
      {isMobile && (
        <div className={styles.reviewsSection__grid}>
          {usersMobile.map((el, index) => {
            return (
              <div className={styles.reviewsSection__cell} key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </div>
      )}
      {isMediumScreen && (
        <div className={styles.reviewsSection__grid}>
          {usersDesktopM.map((el, index) => {
            return (
              <div className={styles.reviewsSection__cell} key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </div>
      )}
      {isLargeScreen && (
        <div className={styles.reviewsSection__grid}>
          {usersDesktopL.map((el, index) => {
            return (
              <div className={styles.reviewsSection__cell} key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.reviewsSection__slider}>
        {reviews.map((el, index) => {
          return (
            <Review key={index} name={el.name} img={el.img} text={el.text} />
          );
        })}
      </div>
      <div className={styles.reviewsSection__actions}>
        <MainButton />
        <RatingInfo />
      </div>
    </section>
  );
};
