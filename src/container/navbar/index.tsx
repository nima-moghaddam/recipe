import React from "react";
import HeaderSvg from "@/ui/HeaderSvg";
import DrawerContainer from "./DrawerContainer";
import IconButton from "@/components/IconButton";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className="flex h-24 items-center font-bold text-black md:h-20">
      <div className="flex w-full items-center justify-between px-10">
        <div className="flex items-center">
          <HeaderSvg />
          <span className="text-green ml-1">Recipedia</span>
        </div>
        <div className="hidden md:block">
          <NavList containerClasses="flex items-center" />
        </div>

        <div className="hidden md:flex md:items-center">
          <IconButton icon="search" classes="mr-3" />
          <IconButton icon="user" classes="mr-3" />
        </div>
        <div className="block md:hidden">
          <DrawerContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
