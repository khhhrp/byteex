import { useMediaQuery } from "react-responsive";
import { Collage } from "../Collage/Collage";
import { Container } from "../Container/Container";
import { InfoCard } from "../InfoCard/InfoCard";
import { InfoCardVariant, type InfoCardType } from "../InfoCard/types";
import { MainButton } from "../MainButton/MainButton";
import { images } from "../Slider/staticContent";
import styles from "./Footer.module.scss";
import { footerInfoCards, infoImg } from "./staticContent";
import { RatingInfo } from "../RatingInfo/RatingInfo";
import { Icon } from "../Icon/Icon";

type Props = {
  title?: string;
  text?: string;
  cards?: InfoCardType[];
  src?: string;
};

export const Footer = (props: Props) => {
  const {
    title = "Find something you love.",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    cards = footerInfoCards,
    src = infoImg
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
          <div className={styles.footer__inner}>
            <div className={styles.footer__actions}>
              <MainButton />
              {isMobile && <RatingInfo />}
            </div>
            {!isMobile && (
              <div className={styles.footer__info}>
                <div className={styles.footer__infoContent}>
                  <div className={styles.footer__infoIcon}>
                    <Icon name="timer" size="12" />
                  </div>
                  <p className={styles.footer__infoText}>Ships in 1-2 Days</p>
                </div>
                <div className={styles.footer__infoPicture}>
                  <img src={src} alt="" />
                </div>
              </div>
            )}
            {!isMobile && (
              <div className={styles.footer__cards}>
                <div className={styles.footer__cardsWrapper}>
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
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
