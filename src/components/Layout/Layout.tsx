import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
