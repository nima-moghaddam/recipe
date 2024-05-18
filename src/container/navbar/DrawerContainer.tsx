"use client";
import Drawer from "@/components/Drawer";
import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import MenuSvg from "@/ui/MenuSvg";
import IconButton from "@/components/IconButton";

const DrawerContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton icon="menu" onClick={() => setIsOpen(true)} />

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <NavigationLinks containerClasses="flex flex-col items-end gap-5" />
      </Drawer>
    </>
  );
};

export default DrawerContainer;
