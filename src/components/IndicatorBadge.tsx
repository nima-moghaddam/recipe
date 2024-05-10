"use client";
import React from "react";
import { useSelector } from "react-redux";

const IndicatorBadge = () => {
  const { favorList } = useSelector((state: any) => state?.favourit);

  return (
    <span className="absolute bg-red-600 text-white rounded-full text-[8px] px-1 text-center bottom-4 right-[-8px]">
      {favorList.length}
    </span>
  );
};

export default IndicatorBadge;
