import { FC } from "react";
import styles from "./Footer.module.css";
import { Star } from "../Star/Star";
import logo from "./../../shared/assets/logo.svg";

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <span>nonameshop©2024</span>
      <Star />
      <span>
        {" "}
        <img src={logo} alt="logo" />
        made in red collar
      </span>
    </footer>
  );
};
