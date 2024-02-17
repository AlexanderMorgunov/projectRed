import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { useAppDispatch } from "./reduxHook";
import { getCategories } from "../shared/store/reducers/productsSlice";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return <AppRouter />;
};
