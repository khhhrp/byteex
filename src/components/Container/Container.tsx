import type { PropsWithChildren } from "react";
import styles from "./Container.module.scss";

type Props = {} & PropsWithChildren;

export const Container = (props: Props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};
