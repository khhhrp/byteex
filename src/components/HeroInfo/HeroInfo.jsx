import styles from "./HeroInfo.module.scss";
import Icon from "../Icon/Icon";

const HeroInfo = (props) => {
  const { items = [] } = props;

  return (
    <div className={styles.heroInfo}>
      {items.map((item, id) => {
        return (
          <div key={id} className={styles.heroInfo__item}>
            <div className={styles.heroInfo__circle}>
              <Icon name={item.icon} size={item.size} />
            </div>
            <p className={styles.heroInfo__text}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroInfo;
