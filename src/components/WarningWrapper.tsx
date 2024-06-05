import React, { ReactNode } from "react";

interface IWarning {
  message?: string;
  hasData: boolean;
  children: ReactNode;
  alertComponent?: ReactNode;
}

const WarningWrapper = ({
  message,
  hasData,
  children,
  alertComponent,
}: IWarning) => {
  return (
    <>
      {hasData ? (
        <>{children}</>
      ) : (
        alertComponent || (
          <div className="my-25 flex w-full items-center justify-center rounded bg-red-200 py-3 text-red-600">
            {message}
          </div>
        )
      )}
    </>
  );
};

export default WarningWrapper;
