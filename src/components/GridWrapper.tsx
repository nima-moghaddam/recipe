import React, { ReactNode } from "react";

interface IGridWrapper {
  children: ReactNode;
  classes?: string;
}

const GridWrapper = ({ children, classes }: IGridWrapper) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 ${classes}`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
