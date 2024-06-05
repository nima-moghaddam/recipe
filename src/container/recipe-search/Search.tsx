"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";
import SvgIcon from "@/components/SvgIcon";

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
      params.delete("query");
      params.delete("page");

      params.set("query", value.trim());
      router.replace(`/recipe?${params.toString()}&page=1`);
    } else if (
      (e as KeyboardEvent<HTMLInputElement>).key === "Enter" &&
      value.length === 0
    ) {
      router.replace(`/recipe`);
    }
  };

  return (
    <div className="relative w-full md:w-1/2">
      <input
        className="w-full rounded-lg border py-2 pl-10 pr-4 text-primary shadow-sm outline-none focus:border-primary focus:shadow-sm focus:shadow-primary"
        placeholder="Search"
        onKeyDown={handleUserType}
        defaultValue={""}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex w-7 items-center pl-3">
        <SvgIcon name="search" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex w-7 items-center pr-3">
        <SvgIcon name="option" />
      </div>
    </div>
  );
};

export default Search;
