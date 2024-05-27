import SearchRecipeSvg from "@/ui/SearchRecipeSvg";
import React from "react";

const NoRecipeFound = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="mb-3">
        <SearchRecipeSvg />
      </div>
      <div className="mb-2 text-center font-bold text-primary text-xl">
        Search your desired recipe now
      </div>
    </div>
  );
};

export default NoRecipeFound;
