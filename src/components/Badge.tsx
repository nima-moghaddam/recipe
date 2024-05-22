import { TGlobalColors } from "@/types/GlobalColor-Type";
import React, { ReactNode } from "react";

interface IBadge {
  name: string;
  color?: TGlobalColors;
  classes?: string;
  icon?: ReactNode;
}

const Badge = ({ name, color = "primary", classes = "", icon }: IBadge) => {
  let colorClass = "";

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
      colorClass = "border-primary-normal text-primary-normal";
      break;
  }

  return (
    <span
      className={`flex items-center justify-center rounded border px-2 ${colorClass} ${classes}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{name}</span>
    </span>
  );
};

export default Badge;
