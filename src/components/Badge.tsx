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
    case "secondary":
      colorClass = "border-secondary text-secondary";
      break;
    case "danger":
      colorClass = "border-danger text-danger";
      break;
    case "black":
      colorClass = "border-black text-black";
      break;
    default:
      colorClass = "border-primary text-primary";
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
