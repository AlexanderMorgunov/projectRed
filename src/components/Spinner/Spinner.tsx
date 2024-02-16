import { Box, Typography } from "@mui/material";
import starSvg from "../../shared/assets/star.svg";
import styles from "./Spinner.module.css";
import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
      }}
    >
      <img src={starSvg} className={styles.spinner}></img>{" "}
      <Typography component="span" sx={{ fontSize: 14 }}>
        loading
      </Typography>
    </Box>
  );
};
