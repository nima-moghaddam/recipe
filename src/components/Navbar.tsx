import Link from "next/link";
import React from "react";
import IndicatorBadge from "./IndicatorBadge";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white font-bold h-24 md:h-20 flex items-center">
      <div className="flex flex-col justify-between md:flex-row items-center w-full px-10">
        <div className="w-full mb-3 md:mb-0">
          <Search />
        </div>
        <div className="flex">
          <Link className="mx-3" href={"/"}>
            Home
          </Link>
          <div className="me-5 relative">
            <IndicatorBadge />
            <Link href={"/favourits"}>Favourits</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
