import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-primary"></div>
    </div>
  );
};

export default Spinner;
