import styles from "./HeroSection.module.scss";
import Logo from "../Logo/Logo";
import Collage from "../Collage/Collage";
import Icon from "../Icon/Icon";

const HeroSection = (props) => {
  const { className } = props;

  return (
    <section className={`${styles.heroSection} ${className || ""}`.trim()}>
      <Logo className={styles.heroSectionLogo} />
      <div className={styles.heroSectionСontent}>
        <h1 className={styles.heroSectionTitle}>
          Don’t apologize for being comfortable.
        </h1>
        <Collage
          className={styles.heroSectionСollage}
          firstImg="../../../src/assets/images/hero01.webp"
          secondImg="../../../src/assets/images/hero02.webp"
          thirdImg="../../../src/assets/images/hero03.webp"
        />
      </div>
    </section>
  );
};

export default HeroSection;
