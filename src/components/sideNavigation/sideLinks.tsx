import Link from "next/link";
import React from "react";

const SideNavigationLink = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <div className="flex">
      {children}
      <Link href="" className="ml-2">
        {name}
      </Link>
    </div>
  );
};

export default SideNavigationLink;
