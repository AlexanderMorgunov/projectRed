import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AllItems } from "../pages/AllItems/AllItems";
import { Page404 } from "../pages/Page404/Page404";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<AllItems />} />
    </Routes>
  );
};
