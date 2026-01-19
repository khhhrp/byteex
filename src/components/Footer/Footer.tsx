import { useMediaQuery } from "react-responsive";
import { Collage } from "../Collage/Collage";
import { Container } from "../Container/Container";
import { InfoCard } from "../InfoCard/InfoCard";
import { InfoCardVariant, type InfoCardType } from "../InfoCard/types";
import { MainButton } from "../MainButton/MainButton";
import { images } from "../Slider/staticContent";
import styles from "./Footer.module.scss";
import { footerInfoCards } from "./staticContent";

type Props = {
  title?: string;
  text?: string;
  cards?: InfoCardType[];
};

export const Footer = (props: Props) => {
  const {
    title = "Find something you love.",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    cards = footerInfoCards
  } = props;

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)"
  });

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__content}>
            <h2 className={styles.footer__title}>{title}</h2>
            <p className={styles.footer__text}>{text}</p>
          </div>
          <div className={styles.footer__collage}>
            <Collage images={images} />
          </div>
          <div className={styles.footer__button}>
            <MainButton />
          </div>
          {!isMobile && (
            <div className={styles.footer__cards}>
              {cards.map((el, index) => {
                return (
                  <InfoCard
                    key={index}
                    icon={el.icon}
                    description={el.description}
                    variant={InfoCardVariant.Minimal}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};
