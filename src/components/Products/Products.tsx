import { useAppDispatch, useAppSelector } from "../../app/reduxHook";
import { useEffect } from "react";
import {
  getProducts,
  getProductsForCategory,
} from "../../shared/store/reducers/productsSlice";
import { Spinner } from "../Spinner/Spinner";
import { Product } from "../Product/Product";
import styles from "./Products.module.css";

export const Products = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { status, products, activeCategory, productsForCategory } =
    useAppSelector((state) => state.products);

  useEffect(() => {
    if (activeCategory !== "All") {
      dispatch(getProductsForCategory({ category: activeCategory }));
    }
  }, [activeCategory]);

  switch (status) {
    case "loading":
      return <Spinner />;
    case "succeeded":
      return (
        <div className={styles.ProductsContainer}>
          {(activeCategory === "All" ? products : productsForCategory).map(
            (el) => {
              return <Product item={el} key={el.id} />;
            }
          )}
        </div>
      );
    case "failed":
      return <div>error</div>;
  }
};
