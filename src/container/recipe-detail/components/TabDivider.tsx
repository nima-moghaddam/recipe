import React from "react";

interface IProps {
  title: string;
  value: string | number;
  hasBorder?: boolean;
}

const TabDivider = ({ title, value, hasBorder = true }: IProps) => {
  return (
    <div
      className={`flex h-[40px] flex-col items-center justify-center text-nowrap  px-5 ${hasBorder ? "border-r-2 border-orange-100" : ""}`}
    >
      <span className="mb-1 text-primary">{title}</span>
      <span className="text-xs font-bold">{value}</span>
    </div>
  );
};

export default TabDivider;
