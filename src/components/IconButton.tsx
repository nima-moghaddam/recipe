import React, { MouseEventHandler, ReactNode } from "react";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactNode;
  classes?: string;
}

const IconButton = ({ onClick, icon, classes }: IconButton) => {
  return (
    <button
      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:shadow-sm hover:shadow-primary-normal ${classes}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
