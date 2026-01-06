import styles from "./TopBanner.module.scss";

const TopBanner = (props) => {
  const { className } = props;

  return (
    <div className={`${styles.topBanner} ${className || ""}`.trim()}>
      <span className={`${styles.topBannerText} ${styles.topBannerTextMobile}`}>
        FREE SHIPPING on orders &gt; $200
      </span>
      <span
        className={`${styles.topBannerText} ${styles.topBannerTextDesktop}`}
      >
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
        SHIPPING on orders &gt; $200 | easy 45 day return window.
      </span>
    </div>
  );
};

export default TopBanner;
