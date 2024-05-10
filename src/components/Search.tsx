"use client";
import OptionSvg from "@/ui/OptionSvg";
import SearchSvg from "@/ui/SearchSvg";
import { useRouter } from "next/navigation";
import React from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
interface ISearch {
  recipies: any;
}

const Search = ({ recipies }: ISearch) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  console.log(recipies);

  const handleUserType = (
    e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    const value = (e as ChangeEvent<HTMLInputElement>).target.value;
    const params = new URLSearchParams(searchParams);

    if (
      (e as KeyboardEvent<HTMLInputElement>).key === "Enter" &&
      value.length > 0
    ) {
      params.set("query", value.trim());
    } else {
      params.delete("query");
      router.push("/");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <input
        className="pl-10 pr-4 py-2 border rounded-lg outline-none w-full focus:border-purple-500"
        placeholder="Search"
        onKeyDown={handleUserType}
        onChange={handleUserType}
        defaultValue={""}
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
