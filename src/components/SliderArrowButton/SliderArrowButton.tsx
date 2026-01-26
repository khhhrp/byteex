import type { CallBack } from "../..";
import { Icon } from "../Icon/Icon";
import styles from "./SliderArrowButton.module.scss";

type Props = {
  onClick: CallBack;
  iconName: string;
};

export const SliderArrowButton = (props: Props) => {
  const { onClick, iconName } = props;

  return (
    <button
      className={styles.sliderArrowButton}
      onClick={onClick}
      type="button"
    >
      <Icon name={iconName} size="15" />
    </button>
  );
};
