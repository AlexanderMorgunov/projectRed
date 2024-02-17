import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Page404 } from "../pages/Page404/Page404";
import { Layout } from "../components/Layout/Layout";
import { useAppSelector } from "./reduxHook";
import { Products } from "../pages/Products/Products";

export const AppRouter: FC = () => {
  const routes = useAppSelector((state) => state.products.categories);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<Page404 />} />
        {routes.map((route) => (
          <Route key={route} path={route} element={<Products />} />
        ))}
      </Route>
    </Routes>
  );
};
