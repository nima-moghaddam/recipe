"use client";
import OptionSvg from "@/ui/OptionSvg";
import SearchSvg from "@/ui/SearchSvg";
import { useRouter } from "next/navigation";
import React from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUserType = (
    e: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  ) => {
    const value = (e as ChangeEvent<HTMLInputElement>).target.value;
    const params = new URLSearchParams(searchParams);

    if (
      (e as KeyboardEvent<HTMLInputElement>).key === "Enter" &&
      value.length > 0
    ) {
      params.set("query", value.trim());
      router.replace(`/recipe?${params.toString()}`);
    } 
  };

  return (
    <div className="relative w-full md:w-1/2">
      <input
        className="focus:border-primary-normal text-primary-normal w-full rounded-lg border py-2 pl-10 pr-4 outline-none shadow-sm"
        placeholder="Search"
        onKeyDown={handleUserType}
        defaultValue={""}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex w-7 items-center pl-3">
        <SearchSvg />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex w-7 items-center pr-3">
        <OptionSvg />
      </div>
    </div>
  );
};

export default Search;
