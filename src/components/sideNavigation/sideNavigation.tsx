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
      className={`fixed ${
        !hovered ? "w-[80px] items-center" : "w-[250px]"
      } h-screen bg-dark_blue pt-[90px] flex flex-col transition-all font-semibold`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${hovered && "pl-8"}`}>
        <SideNavigationLink name={`${hovered ? "Dashboard" : ""}`}>
          <MdOutlineDashboardCustomize className="text-2xl" />
        </SideNavigationLink>
      </div>
      <span className="line h-[2px] w-full bg-white/75 my-4"></span>
      <div className={`${hovered && "pl-8"}`}>
        <ul className="list-none flex flex-col space-y-4">
          <li>
            <SideNavigationLink name={`${hovered ? "Target" : ""}`}>
              <MdPlace className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Inspection" : ""}`}>
              <FcInspection className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Categories" : ""}`}>
              <MdOutlineCategory className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Inspectors" : ""}`}>
              <BsPersonAdd className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Inspection History" : ""}`}>
              <AiOutlineHistory className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Inspection Draft" : ""}`}>
              <RiDraftLine className="text-2xl" />
            </SideNavigationLink>
          </li>
        </ul>
      </div>
      <span className="line h-[2px] w-full bg-white/75 my-4 mt-auto"></span>
      <div className={`${hovered && "pl-8"}`}>
        <ul className="list-none flex flex-col space-y-4">
          <li>
            <SideNavigationLink name={`${hovered ? "Help" : ""}`}>
              <IoMdHelpCircleOutline className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Discover" : ""}`}>
              <AiOutlineBulb className="text-2xl" />
            </SideNavigationLink>
          </li>
          <li>
            <SideNavigationLink name={`${hovered ? "Admin" : ""}`}>
              <MdAdminPanelSettings className="text-2xl" />
            </SideNavigationLink>
          </li>
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
