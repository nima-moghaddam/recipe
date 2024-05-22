import { TGlobalColors } from "@/types/GlobalColor-Type";
import React, { MouseEventHandler } from "react";

interface IButton {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: TGlobalColors;
  classes?: string;
}

const Button = ({ name, onClick, color = "primary", classes = "" }: IButton) => {
  let colorClass = "bg-primary hover:bg-orange-600";

  switch (color) {
    case "danger":
      colorClass = "bg-danger hover:bg-red-600";
      break;
    case "secondary":
      colorClass = "bg-danger hover:bg-purple-600";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded bg-primary px-2 py-1 text-sm text-white hover:bg-primary-dark ${classes}`}
    >
      {name}
    </button>
  );
};

export default Button;
