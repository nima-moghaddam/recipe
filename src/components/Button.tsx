import React, { MouseEventHandler } from "react";

interface IButton {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "blue" | "red" | "purple";
  classes?: string
}

const Button = ({ name, onClick, color = "blue",classes='' }: IButton) => {
  let colorClass = "bg-blue-500 hover:bg-blue-600";

  switch (color) {
    case "red":
      colorClass = "bg-red-500 hover:bg-red-600";
      break;
    case "purple":
      colorClass = "bg-purple-500 hover:bg-purple-600";
      break;
    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`rounded px-2 py-1 text-white text-sm cursor-pointer ${colorClass} ${classes}`}
    >
      {name}
    </button>
  );
};

export default Button;
