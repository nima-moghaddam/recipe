"use client";
import Drawer from "@/components/Drawer";
import React, { useState } from "react";
import NavList from "./NavList";
import IconButton from "@/components/IconButton";
import SvgIcon from "@/components/SvgIcon";
import MeneListSvg from "@/ui/MeneListSvg";
import ToolBarIcons from "./ToolBarIcons";

const DrawerContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        icon={<SvgIcon name="menu" />}
        onClick={() => setIsOpen(true)}
      />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} header={<ToolBarIcons />}>
        <NavList containerClasses="flex flex-col items-center gap-6" />
        <div className="absolute bottom-[-40px] left-auto right-auto flex w-full items-end justify-center">
          <MeneListSvg />
        </div>
      </Drawer>
    </>
  );
};

export default DrawerContainer;
