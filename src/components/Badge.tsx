import React from "react";

interface IBadge {
  name: string;
  color?: "blue" | "green" | "purple";
  classes?: string;
}

const Badge = ({ name, color = "blue", classes = "" }: IBadge) => {
  let colorClass = "bg-blue-300 ";

  switch (color) {
    case "green":
      colorClass = "bg-green-300 ";
      break;
    case "purple":
      colorClass = "bg-purple-300 ";
      break;
    default:
      break;
  }

  return (
    <span className={`px-2 rounded text-white ${colorClass} ${classes}`}>
      {name}
    </span>
  );
};

export default Badge;
