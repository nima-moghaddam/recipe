import React, { ReactNode } from "react";

interface IWarning {
  message: string;
  hasData: boolean;
  children: ReactNode;
}

const WarningWrapper = ({ message, hasData, children }: IWarning) => {
  return (
    <>
      {hasData ? (
        <>{children}</>
      ) : (
        <div className="w-full flex rounded items-center justify-center my-25 py-3 bg-red-200 text-red-600">{message}</div>
      )}
    </>
  );
};

export default WarningWrapper;
