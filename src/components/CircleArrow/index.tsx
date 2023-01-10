/* eslint-disable react/require-default-props */
import React from "react";
import * as styles from "./index.module.css";

export enum CircleArrowThemeEnum {
  "dark" = "dark",
  "light" = "light",
}
export interface CircleArrowProps {
  size?: number;
  rotate?: number;
  theme?: CircleArrowThemeEnum;
  className?: any;
}

export function CircleArrow(props: CircleArrowProps) {
  const { size = 24, rotate = 0, theme = "dark", className } = props;

  const style = {
    transform: `rotate(${rotate}deg)`,
    width: `${size * 16}px`,
    height: `${size * 16}px`,
  };

  return (
    <div
      className={`inline-block text-0 p-1 border-[var(--color-text-base)] rounded-full transition-all duration-150 ease-in-out ${styles[theme]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        className="group-hover:fill-[var(--color-text-base)]"
        style={style}
      >
        <path
          stroke="currentColor"
          strokeWidth="1.4"
          d="M12 3v17M19 13l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
