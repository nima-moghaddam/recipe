import React from "react";
import DrawerContainer from "./DrawerContainer";
import IconButton from "@/components/IconButton";
import NavList from "./NavList";
import SvgIcon from "@/components/SvgIcon";

const Navbar = () => {
  return (
    <nav className="flex h-24 items-center font-bold text-black md:h-20">
      <div className="flex w-full items-center justify-between px-10">
        <div className="flex items-center">
          <SvgIcon name="dish" color="primary" width={20} height={20} />
          <span className="ml-1 text-green">Recipedia</span>
        </div>
        <div className="hidden md:block">
          <NavList containerClasses="flex items-center" />
        </div>

        <div className="hidden md:flex md:items-center">
          <IconButton icon={<SvgIcon name="search" width={20} height={20}  />} classes="mr-3" />
          <IconButton icon={<SvgIcon name="user" width={20} height={20}  />} classes="mr-3" />
        </div>
        <div className="block md:hidden">
          <DrawerContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
