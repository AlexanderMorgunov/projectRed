import { FC, useState } from "react";
import { IProduct } from "../../shared/types/types";
import styles from "./Product.module.css";
import { Carousel } from "../Carousel/Carousel";
import { Star } from "../Star/Star";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import clsx from "clsx";
import { Bag } from "../Bag";

interface IProps {
  item: IProduct;
}

export const Product: FC<IProps> = ({ item }) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <div className={styles.ProductContainer}>
      {item.discountPercentage && (
        <div
          className={clsx({
            [styles.discountContainer]: !readMore,
            [styles.displayNone]: readMore,
          })}
        >
          <span className={styles.discount}>{item.discountPercentage}%</span>{" "}
          off sale
        </div>
      )}
      {/* {!readMore && <Carousel images={item.images} />} */}
      <Carousel images={item.images} disabled={readMore} />
      <div className={styles.ratingContainer}>
        <Star size={14} color="#3625FF" />
        {item.rating}
      </div>
      <div className={styles.title}>{item.title}</div>
      <ProductDescription
        text={item.description}
        readMore={readMore}
        setReadMore={setReadMore}
      />
      <div className={styles.priceContainer}>
        <span className={styles.discountPriceContainer}>
          <Bag />${item.price}
        </span>
        <span className={styles.oldPrice}>
          ${Math.trunc(item.price / (1 - item.discountPercentage / 100))}
        </span>
      </div>
    </div>
  );
};
