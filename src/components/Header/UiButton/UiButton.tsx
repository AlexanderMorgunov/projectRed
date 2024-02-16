import { FC } from "react";
import styles from "./UiButton.module.css";
import clsx from "clsx";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  isActive?: boolean;
  classNames?: string;
  onClick?: () => void;
}

export const UiButton: FC<IProps> = ({
  children,
  isActive,
  variant,
  classNames,
  onClick,
}) => {
  return !isActive ? (
    <button
      onClick={onClick}
      className={clsx(
        {
          [styles.UiButton]: variant === "primary",
          [clsx(styles.UiButton, styles.secondary)]: variant === "secondary",
        },
        classNames
      )}
    >
      {children}
    </button>
  ) : (
    <button className={clsx(styles.UiButtonActive, classNames)}>
      <div className={styles.circle}></div>
      {children}
    </button>
  );
};
