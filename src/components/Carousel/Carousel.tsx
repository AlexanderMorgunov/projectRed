import { FC, useState } from "react";
import styles from "./Carousel.module.css";
import clsx from "clsx";

interface IProps {
  images: string[];
  disabled?: boolean;
}

export const Carousel: FC<IProps> = ({ images, disabled }) => {
  const [currenntImage, setCurrentImage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setImageHandler = (i: number) => {
    setCurrentImage(i);
  };

  return (
    <div
      className={clsx({
        [styles.Carousel]: !disabled,
        [styles.CarouselDisabled]: disabled,
      })}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <div className={styles.CarouselContainer}>
        <div
          className={styles.CarouselWindow}
          style={{
            transform: `translateX(-${(currenntImage * 100) / images.length}%)`,
          }}
        >
          {images.map((el) => {
            return (
              <img
                src={el}
                alt="image"
                className={styles.CarouseImage}
                key={el}
              />
            );
          })}
        </div>
      </div>
      {images.length > 1 && (
        <div
          className={clsx(styles.btnsGroup, {
            [styles.btnsGroupHidden]: !isVisible,
          })}
        >
          {images.map((_, i) => {
            return (
              <button
                className={clsx(styles.circle, {
                  [styles.circleActive]: i === currenntImage,
                })}
                onClick={() => setImageHandler(i)}
                key={i}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};
