import { useEffect } from "react";
import { Bag } from "../Bag";
import styles from "./Header.module.css";
import { Loupe } from "./Loupe";
import { UiButton } from "./UiButton/UiButton";
import { useAppDispatch, useAppSelector } from "../../app/reduxHook";
import { getCategories } from "../../shared/store/reducers/productsSlice";
import { CategoryButtonsGroup } from "./CategoryButtonsGroup/CategoryButtonsGroup";
import { setActiveCategory } from "../../shared/store/reducers/productsSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { categories, activeCategory } = useAppSelector(
    (state) => state.products
  );

  const setCategory = (category: string) => {
    console.log(category);
    dispatch(setActiveCategory(category));
  };

  return (
    <div className={styles.headerContainer}>
      <UiButton variant="primary" classNames={styles.loupeBtn}>
        <Loupe />
      </UiButton>
      <CategoryButtonsGroup
        categories={categories}
        activeCategory={activeCategory}
        setCategory={setCategory}
      ></CategoryButtonsGroup>
      <UiButton variant="secondary" classNames={styles.bagBtn}>
        <Bag color="#3625FF" /> cart
      </UiButton>
    </div>
  );
};
