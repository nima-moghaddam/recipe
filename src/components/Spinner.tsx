import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full my-20">
      <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
