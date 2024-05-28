import Indicator from "@/components/Indicator";
import Link from "next/link";
import React from "react";

const navList = [
  { name: "Home", url: "/" },
  { name: "Comment", url: "/comments" },
  { name: "Favourit", url: "/favourits?page=1" },
];

interface IProps {
  containerClasses: string;
}

const NavList = ({ containerClasses }: IProps) => {
  return (
    <ul className={containerClasses}>
      {navList.map((item) => (
        <li className="relative" key={item.name}>
          {item.name === "Favourit" && <Indicator />}
          <Link
            className="hover:text-primary mx-3 cursor-pointer"
            href={item.url}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
