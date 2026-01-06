import styles from "./HeroSection.module.scss";
import Logo from "../Logo/Logo";
import Collage from "../Collage/Collage";
import HeroInfo from "../HeroInfo/HeroInfo";
import { images, items } from "./staticContent";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSection__logo}>
        <Logo />
      </div>
      <h1 className={styles.heroSection__title}>
        Don’t apologize for being comfortable.
      </h1>
      <Collage images={images} />
      <HeroInfo items={items} />
    </section>
  );
};

export default HeroSection;
