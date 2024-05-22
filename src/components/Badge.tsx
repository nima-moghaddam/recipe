import { TGlobalColors } from "@/types/GlobalColor-Type";
import React from "react";

interface IBadge {
  name: string;
  color?: TGlobalColors;
  classes?: string;
}

const Badge = ({ name, color = "primary", classes = "" }: IBadge) => {
  let colorClass = "border-primary-normal text-primary-normal";

  switch (color) {
    case "green":
      colorClass = "border-green text-green";
      break;
    case "secondary":
      colorClass = "border-secondary text-secondary";
      break;
    case "black":
      colorClass = "border-black text-black";
      break;
    default:
      break;
  }

  return (
    <span className={`rounded px-2 ${colorClass} ${classes}`}>{name}</span>
  );
};

export default Badge;
