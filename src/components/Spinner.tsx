import React from "react";

const Spinner = () => {
  return (
    <div className="my-20 flex h-screen w-full items-center justify-center">
      <div className="border-primary h-16 w-16 animate-spin rounded-full border-t-4"></div>
    </div>
  );
};

export default Spinner;
