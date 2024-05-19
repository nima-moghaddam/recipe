import React, { MouseEventHandler } from "react";
import CloseSvg from "@/ui/CloseSvg";
import SearchSvg from "@/ui/SearchSvg";
import UserSvg from "@/ui/UserSvg";
import MenuSvg from "@/ui/MenuSvg";
import FilledHeartSvg from "@/ui/FilledHeartSvg";
import OutlineHeartSvg from "@/ui/OutlineHeartSvg";
import LinkSvg from "@/ui/LinkSvg";

interface IconButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon:
    | "user"
    | "search"
    | "close"
    | "menu"
    | "heart"
    | "outline-heart"
    | "link";
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
    case "heart":
      svg = <FilledHeartSvg />;
      break;
    case "outline-heart":
      svg = <OutlineHeartSvg />;
      break;
    case "link":
      svg = <LinkSvg />;
      break;
    default:
      svg = <></>;
      break;
  }

  return (
    <button
      className={`cursor-pointer rounded w-8 h-8 flex justify-center items-center hover:shadow-sm hover:shadow-primary-normal ${classes}`}
      onClick={onClick}
    >
      {svg}
    </button>
  );
};

export default IconButton;
