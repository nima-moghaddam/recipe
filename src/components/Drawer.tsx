"use client";
import useOutsideClick from "@/utils/useOutsideClick";
import React, { useRef, ReactNode } from "react";
import IconButton from "./IconButton";

interface IDrawer {
  isOpen: boolean;
  setIsOpen: Function;
  children: ReactNode;
}

const Drawer = ({ isOpen, setIsOpen, children }: IDrawer) => {
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(false);
  };

  useOutsideClick({
    ref: drawerRef,
    handleOutsidClick: () => {
      setIsOpen(false);
    },
  });

  return (
    <div
      ref={drawerRef}
      className={`fixed right-0 top-0 z-40 h-full w-full transform bg-white shadow sm:w-64 ${isOpen ? "translate-x-0" : "translate-x-full"} p-3 transition-transform duration-300 ease-in-out`}
    >
      <div className="mb-4">
        <IconButton icon="close" onClick={toggleDrawer} />
      </div>
      <div onClick={toggleDrawer}>{children}</div>
    </div>
  );
};

export default Drawer;
