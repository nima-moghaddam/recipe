import React, { ReactNode } from "react";

interface IGridWrapper {
  children: ReactNode;
}

const GridWrapper = ({ children }: IGridWrapper) => {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {children}
    </div>
  );
};

export default GridWrapper;
