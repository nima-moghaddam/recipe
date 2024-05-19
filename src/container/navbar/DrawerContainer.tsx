"use client";
import Drawer from "@/components/Drawer";
import React, { useState } from "react";
import NavList from "./NavList";
import IconButton from "@/components/IconButton";
import SvgIcon from "@/components/SvgIcon";

const DrawerContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        icon={<SvgIcon name="menu" />}
        onClick={() => setIsOpen(true)}
      />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <NavList containerClasses="flex flex-col items-center gap-6" />
      </Drawer>
    </>
  );
};

export default DrawerContainer;
