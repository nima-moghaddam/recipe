import { TGlobalColors } from "@/types/GlobalColor-Type";
import React, { MouseEventHandler } from "react";

interface IButton {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: TGlobalColors;
  classes?: string;
  size?: "sm" | "lg";
  disabled?: boolean;
}

const Button = ({
  name,
  onClick,
  color = "primary",
  classes = "",
  size = "sm",
  disabled = false,
}: IButton) => {
  let bgColor = "bg-primary hover:bg-orange-400";

  switch (color) {
    case "danger":
      bgColor = "bg-danger hover:bg-red-500";
      break;
    case "secondary":
      bgColor = "bg-secondary hover:bg-green-700";
      break;
    case "black":
      bgColor = "bg-black";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded text-center text-sm  text-white ${size === "sm" ? "px-2 py-2" : "px-4 py-3"} ${bgColor}  ${classes}`}
    >
      {name}
    </button>
  );
};

export default Button;
