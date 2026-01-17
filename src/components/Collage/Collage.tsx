import styles from "./Collage.module.scss";

const imagesCount: number = 3;

type Props = {
  images: string[];
};

export const Collage = (props: Props) => {
  const { images = [] } = props;

  if (images.length < imagesCount) {
    return null;
  }

  const firstThreeImages = images.slice(0, imagesCount);

  return (
    <div className={styles.collage}>
      {firstThreeImages.map((item, id) => {
        return (
          <div key={id} className={styles.collage__item}>
            <img src={item} alt="photo" className={styles.collage__img} />
          </div>
        );
      })}
    </div>
  );
};
