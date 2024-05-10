import React, { MouseEventHandler } from "react";

interface IButton {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ name, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className="rounded px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm cursor-pointer"
    >
      {name}
    </button>
  );
};

export default Button;
