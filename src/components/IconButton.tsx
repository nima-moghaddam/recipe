import CloseSvg from "@/ui/CloseSvg";
import SearchSvg from "@/ui/SearchSvg";
import UserSvg from "@/ui/UserSvg";
import MenuSvg from "@/ui/MenuSvg";

import React, { MouseEventHandler } from "react";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: "user" | "search" | "close" | "menu";
  classes?: string;
}

const IconButton = ({ onClick, icon, classes }: IconButton) => {
  let svg = <></>;

  switch (icon) {
    case "user":
      svg = <UserSvg />;
      break;
    case "search":
      svg = <SearchSvg />;
      break;
    case "menu":
      svg = <MenuSvg />;
      break;
    case "close":
      svg = <CloseSvg />;
      break;
    default:
      svg = <></>;
      break;
  }

  return (
    <button
      className={`hover:bg-primary-normal cursor-pointer rounded p-1 ${classes}`}
      onClick={onClick}
    >
      {svg}
    </button>
  );
};

export default IconButton;
