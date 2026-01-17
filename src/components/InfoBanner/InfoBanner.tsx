import { useMediaQuery } from "react-responsive";
import { Container } from "../Container/Container";
import { InfoCard } from "../InfoCard/InfoCard";
import styles from "./InfoBanner.module.scss";
import { infoCards, type InfoCardType } from "./staticContent";

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
            {isMobile
              ? firstTwoCards.map((el: InfoCardType, index: number) => {
                  return (
                    <InfoCard
                      name={el.icon}
                      size={el.size}
                      title={el.title}
                      desc={el.description}
                      key={index}
                    />
                  );
                })
              : cards.map((el: InfoCardType, index: number) => {
                  return (
                    <InfoCard
                      name={el.icon}
                      size={el.size}
                      title={el.title}
                      desc={el.description}
                      key={index}
                    />
                  );
                })}
          </div>
        </div>
      </Container>
    </div>
  );
};
