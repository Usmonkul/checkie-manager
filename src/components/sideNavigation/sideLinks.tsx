import Link from "next/link";
import React from "react";

const SideNavigationLink = ({
  children,
  name,
  hovered,
}: {
  children: React.ReactNode;
  name: string;
  hovered: boolean;
}) => {
  return (
    <li
      className={`flex py-2 hover:bg-slate-400/75 hover:text-light_blue transition-all ${
        hovered ? "pl-8" : ""
      }`}
    >
      {children}
      <Link href="" className="ml-2 hover:text-black">
        {name}
      </Link>
    </li>
  );
};

export default SideNavigationLink;
