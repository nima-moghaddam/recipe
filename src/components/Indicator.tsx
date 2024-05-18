"use client";
import React from "react";
import { useSelector } from "react-redux";

const Indicator = () => {
  const { favorList } = useSelector((state: any) => state?.favourit);

  return (
    <span className="bg-primary-normal absolute bottom-4 right-[0px] rounded-full px-1 text-center text-[8px] text-white">
      {favorList.length}
    </span>
  );
};

export default Indicator;
