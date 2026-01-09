import styles from "./HeroInfo.module.scss";
import Icon from "../Icon/Icon";
// import { useState } from "react";

const HeroInfo = (props) => {
  const { items = [] } = props;
  // const [isOpen, setIsOpen] = useState(items);
  // const [isItems, setIsItems] = useState(false);

  // onClick={() => {
  //   setIsItems(!isItems);
  //   setIsOpen((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         icon: newItemIcon,
  //         size: 20,
  //         text: "Beautiful, comfortable loungewear for day or night.",
  //       },
  //     ];
  //   });
  // }}

  // {isItems && <p className={styles.heroInfo__text}>{item.text}</p>}

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
