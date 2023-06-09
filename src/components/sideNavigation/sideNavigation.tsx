import React, { useState } from "react";
import {
  MdOutlineDashboardCustomize,
  MdPlace,
  MdOutlineCategory,
  MdAdminPanelSettings,
} from "react-icons/md";
import {
  AiOutlineSetting,
  AiOutlineBulb,
  AiOutlineHistory,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FcInspection } from "react-icons/fc";
import { BsPersonAdd } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import SideNavigationLink from "./sideLinks";

const SideNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered((prev) => !prev);
  };
  const handleMouseLeave = () => {
    setHovered((prev) => !prev);
  };

  return (
    <div
      className={`fixed z-40 ${
        !hovered ? "w-[80px] items-center" : "w-[250px]"
      } h-screen bg-dark_blue pt-[90px] flex flex-col transition-all font-semibold`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={``}>
        <SideNavigationLink
          navigation="/"
          hovered={hovered}
          name={`${hovered ? "Home" : ""}`}
        >
          <MdOutlineDashboardCustomize className="text-2xl" />
        </SideNavigationLink>
      </div>
      <span className="line h-[2px] w-full bg-white/75 my-4"></span>
      <div className={``}>
        <ul className="list-none flex flex-col">
          <SideNavigationLink
            navigation="target"
            hovered={hovered}
            name={`${hovered ? "Target" : ""}`}
          >
            <MdPlace className="text-2xl " />
          </SideNavigationLink>

          <SideNavigationLink
            navigation="item"
            hovered={hovered}
            name={`${hovered ? "Inspection Item" : ""}`}
          >
            <FcInspection className="text-2xl" />
          </SideNavigationLink>
          <SideNavigationLink
            navigation="content"
            hovered={hovered}
            name={`${hovered ? "Content" : ""}`}
          >
            <AiOutlineBulb className="text-2xl" />
          </SideNavigationLink>
          <SideNavigationLink
            navigation="categories"
            hovered={hovered}
            name={`${hovered ? "Categories" : ""}`}
          >
            <MdOutlineCategory className="text-2xl" />
          </SideNavigationLink>

          <SideNavigationLink
            navigation="inspectors"
            hovered={hovered}
            name={`${hovered ? "Inspectors" : ""}`}
          >
            <BsPersonAdd className="text-2xl" />
          </SideNavigationLink>

          <SideNavigationLink
            navigation="history"
            hovered={hovered}
            name={`${hovered ? "Inspection History" : ""}`}
          >
            <AiOutlineHistory className="text-2xl" />
          </SideNavigationLink>

          <SideNavigationLink
            navigation="draft"
            hovered={hovered}
            name={`${hovered ? "Inspection Draft" : ""}`}
          >
            <RiDraftLine className="text-2xl" />
          </SideNavigationLink>
        </ul>
      </div>
      <span className="line h-[2px] w-full bg-white/75 my-4 mt-auto"></span>
      <div className={``}>
        <ul className="list-none flex flex-col">
          <SideNavigationLink
            navigation="help"
            hovered={hovered}
            name={`${hovered ? "Help" : ""}`}
          >
            <IoMdHelpCircleOutline className="text-2xl" />
          </SideNavigationLink>

          <SideNavigationLink
            navigation="admin"
            hovered={hovered}
            name={`${hovered ? "Admin" : ""}`}
          >
            <MdAdminPanelSettings className="text-2xl" />
          </SideNavigationLink>
        </ul>
      </div>
      <span className="line h-[2px] w-full bg-white/75 my-4"></span>
      {hovered ? (
        <AiOutlineArrowLeft className="self-end mr-4 mb-2 text-md" />
      ) : (
        <AiOutlineArrowRight className="self-end mr-4 mb-2 text-md" />
      )}
    </div>
  );
};

export default SideNavigation;
