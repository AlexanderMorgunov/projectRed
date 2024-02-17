import { Bag } from "../Bag";
import styles from "./Header.module.css";
import { Loupe } from "./Loupe";
import { UiButton } from "./UiButton/UiButton";
import { useAppDispatch, useAppSelector } from "../../app/reduxHook";
import { CategoryButtonsGroup } from "./CategoryButtonsGroup/CategoryButtonsGroup";
import { setActiveCategory } from "../../shared/store/reducers/productsSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { categories, activeCategory } = useAppSelector(
    (state) => state.products
  );

  const setCategory = (category: string) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <header className={styles.headerContainer}>
      <UiButton variant="primary" classNames={styles.loupeBtn}>
        <Loupe />
      </UiButton>
      <CategoryButtonsGroup
        categories={categories}
        activeCategory={activeCategory}
        setCategory={setCategory}
      />
      <UiButton variant="secondary" classNames={styles.bagBtn}>
        <Bag color="#3625FF" /> cart
      </UiButton>
    </header>
  );
};
