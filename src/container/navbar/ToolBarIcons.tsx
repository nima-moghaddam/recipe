"use client";
import IconButton from "@/components/IconButton";
import SvgIcon from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import React from "react";

const ToolBarIcons = () => {
  const { push } = useRouter();

  return (
    <>
      <IconButton
        icon={<SvgIcon name="search" width={20} height={20} />}
        classes="mr-3"
        onClick={() => push("/recipe")}
      />
      <IconButton
        icon={<SvgIcon name="user" width={20} height={20} />}
        classes="mr-3"
        onClick={() => push("/profile")}
      />
    </>
  );
};

export default ToolBarIcons;
