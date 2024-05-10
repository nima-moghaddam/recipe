import Link from "next/link";
import React from "react";
import IndicatorBadge from "./IndicatorBadge";

const navItem = [{ name: "Favourits", url: "/favourits" }];

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white font-bold h-20 flex items-center">
      <div className="flex justify-between  w-full px-10">
        <Link href={"/"}>Home</Link>
        <div className="me-5 relative">
          <IndicatorBadge />
          <Link href={"/favourits"}>Favourits</Link>
        </div>

        {/* <Link href={"/favourits"}>Favourits</Link>
        <ul className="flex">
          {navItem.map((link) => (
            <li key={link.name} className="me-5 relative">
              <IndicatorBadge />
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
