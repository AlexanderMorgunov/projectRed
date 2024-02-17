import { FC } from "react";
import styles from "./ProductDescription.module.css";

interface IProps {
  text: string;
  readMore: boolean;
  setReadMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductDescription: FC<IProps> = ({
  text,
  readMore,
  setReadMore,
}) => {
  const description =
    text.length >= 80 ? (
      !readMore ? (
        <div className={styles.description}>
          {text.slice(0, 80).concat("...")}
          <span className={styles.readMore} onClick={() => setReadMore(true)}>
            Read more
          </span>
        </div>
      ) : (
        <div className={styles.description}>
          {text}
          <span className={styles.readMore} onClick={() => setReadMore(false)}>
            {" "}
            hide description
          </span>
        </div>
      )
    ) : (
      <div className={styles.description}>{text} </div>
    );

  return description;
};
