import { useMediaQuery } from "react-responsive";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import { accordions, type AccordionType } from "../AccordionItem/staticContent";
import { Container } from "../Container/Container";
import { MainButton } from "../MainButton/MainButton";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import styles from "./FaqSection.module.scss";

type Props = {
  title?: string;
  items?: AccordionType[];
};

export const FaqSection = (props: Props) => {
  const { title = "Frequently asked questions.", items = accordions } = props;

  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 767px)"
  });

  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.faqSection__wrapper}>
          <div className={styles.faqSection__content}>
            <h2 className={styles.faqSection__title}>{title}</h2>
            <div className={styles.faqSection__info}>
              {items.map((el: AccordionType, index: number) => {
                return (
                  <AccordionItem title={el.title} text={el.text} key={index} />
                );
              })}
            </div>
          </div>
          {isMobile && (
            <div className={styles.faqSection__actions}>
              <MainButton />
              <RatingInfo />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
