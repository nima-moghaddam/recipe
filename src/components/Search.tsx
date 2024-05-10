import OptionSvg from "@/ui/OptionSvg";
import SearchSvg from "@/ui/SearchSvg";
import React from "react";

interface ISearch {}

const Search = ({}: ISearch) => {
  return (
    <div className="relative w-full md:w-1/2">
      <input
        className="pl-10 pr-4 py-2 border rounded-lg outline-none w-full focus:border-purple-500"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 left-0 w-7 pl-3 flex items-center pointer-events-none">
        <SearchSvg />
      </div>
      <div className="absolute inset-y-0 right-0 w-7 pr-3 flex items-center pointer-events-none">
        <OptionSvg />
      </div>
    </div>
  );
};

export default Search;
