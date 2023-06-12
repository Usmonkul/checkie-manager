import Link from "next/link";
import React from "react";

const SideNavigationLink = ({
  children,
  name,
  hovered,
  navigation,
}: {
  children: React.ReactNode;
  name: string;
  hovered: boolean;
  navigation: string;
}) => {
  return (
    <Link
      href={`${navigation}`}
      className={`flex py-2 hover:bg-slate-400/75 hover:text-black transition-all ${
        hovered ? "pl-8" : ""
      }`}
    >
      {" "}
      {children}
      <span className="ml-2">{name}</span>
    </Link>
  );
};

export default SideNavigationLink;
