import { useAppDispatch, useAppSelector } from "../../app/reduxHook";
import { useEffect } from "react";
import {
  getProducts,
  getProductsForCategory,
} from "../../shared/store/reducers/productsSlice";
import { Spinner } from "../../components/Spinner/Spinner";
import { Product } from "../../components/Product/Product";
import styles from "./Products.module.css";
import { useInView } from "react-intersection-observer";

export const Products = () => {
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const {
    status,
    products,
    activeCategory,
    productsSkip,
    productsTotal,
    productsForCategory,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts(0));
    }
  }, []);

  useEffect(() => {
    if (activeCategory === "All" && inView && products.length < productsTotal) {
      dispatch(getProducts(productsSkip));
    }
  }, [dispatch, inView]);

  useEffect(() => {
    if (activeCategory !== "All") {
      dispatch(
        getProductsForCategory({
          category: activeCategory,
        })
      );
    }
  }, [activeCategory]);

  const items = activeCategory === "All" ? products : productsForCategory;

  switch (status) {
    case "loading":
      return <Spinner />;
    case "succeeded":
      return (
        <div className={styles.ProductsContainer}>
          {items.map((el, i) => {
            return (
              <div key={i} {...(i === items.length - 1 && { ref: ref })}>
                <Product item={el} key={el.id.toString()} />
              </div>
            );
          })}
        </div>
      );
    case "failed":
      return <div>error</div>;
  }
};
