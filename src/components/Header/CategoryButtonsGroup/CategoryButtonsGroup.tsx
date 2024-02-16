import { FC } from "react";
import { UiButton } from "../UiButton/UiButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    <Swiper slidesPerView={12} spaceBetween={2} mousewheel={true}>
      <SwiperSlide>
        <UiButton
          variant="primary"
          isActive={activeCategory === "All"}
          onClick={() => setCategory("All")}
        >
          All
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
              {el}
            </UiButton>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
