import React, { ReactNode } from "react";

interface IGridWrapper {
  children: ReactNode;
}

const GridWrapper = ({ children }: IGridWrapper) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8">
      {children}
    </div>
  );
};

export default GridWrapper;
