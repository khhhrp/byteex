import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import { InfoCard } from "../InfoCard/InfoCard";
import styles from "./InfoBanner.module.scss";
import { infoCards } from "./staticContent";
import type { InfoCardType } from "../InfoCard/types";

type Props = {
  cards?: InfoCardType[];
};

export const InfoBanner = (props: Props) => {
  const { cards = infoCards } = props;

  const isMobile: boolean = useMediaQuery({
    query: "(max-width: 767px)"
  });

  const firstTwoCards: InfoCardType[] = cards.slice(0, 2);

  return (
    <div className={styles.infoBanner}>
      <Container>
        <div className={styles.infoBanner__wrapper}>
          <h2 className={styles.infoBanner__title}>Our total green impact</h2>
          <div className={styles.infoBanner__cards}>
            {isMobile ? (
              firstTwoCards.map((el, index) => {
                return (
                  <InfoCard
                    icon={el.icon}
                    title={el.title}
                    description={el.description}
                    key={index}
                  />
                );
              })
            ) : (
              <div className={styles.infoBanner__cardsWrapper}>
                {cards.map((el, index) => {
                  return (
                    <InfoCard
                      icon={el.icon}
                      title={el.title}
                      description={el.description}
                      key={index}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
