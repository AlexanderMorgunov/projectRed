import { FC } from "react";
import { UiButton } from "../UiButton/UiButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";
import styles from "./CategoryButtonsGroup.module.css";

interface IProps {
  categories: string[];
  activeCategory: string;
  setCategory: (category: string) => void;
}

export const CategoryButtonsGroup: FC<IProps> = ({
  categories,
  activeCategory,
  setCategory,
}) => {
  return (
    <Swiper slidesPerView={10} spaceBetween={1} mousewheel={true}>
      <SwiperSlide>
        <UiButton
          variant="primary"
          isActive={activeCategory === "All"}
          onClick={() => setCategory("All")}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? styles.navLinkActive : styles.navLink}`
            }
          >
            All
          </NavLink>
        </UiButton>
      </SwiperSlide>
      {categories.map((el) => {
        return (
          <SwiperSlide key={el}>
            <UiButton
              variant="primary"
              isActive={activeCategory === el}
              onClick={() => setCategory(el)}
            >
              <NavLink
                to={el}
                className={({ isActive }) =>
                  `${isActive ? styles.navLinkActive : styles.navLink}`
                }
              >
                {el}
              </NavLink>
            </UiButton>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
