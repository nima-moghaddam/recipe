import React, { MouseEventHandler, ReactNode } from "react";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactNode;
  classes?: string;
}

const IconButton = ({ onClick, icon, classes }: IconButton) => {
  return (
    <button
      className={`hover:shadow-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:shadow-sm ${classes}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
