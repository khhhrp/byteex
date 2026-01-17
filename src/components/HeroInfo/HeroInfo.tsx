import type { Item } from "../HeroSection/staticContent";
import { Icon } from "../Icon/Icon";
import styles from "./HeroInfo.module.scss";

type Props = {
  items: Item[];
};

export const HeroInfo = (props: Props) => {
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
