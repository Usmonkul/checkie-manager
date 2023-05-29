import Image from "next/image";
import React from "react";
import {
  MdDeleteOutline,
  MdOutlineModeEdit,
  MdOutlineSecurityUpdateGood,
} from "react-icons/md";
import { InspectorsProps } from "../../../types/types";
const InspectorCard = ({
  data,
  setinspectorData,
}: {
  data: InspectorsProps;
  setinspectorData: any;
}) => {
  const handleDelete = (dataId: string) => {
    setinspectorData((current: InspectorsProps[]) =>
      current.filter((card: InspectorsProps) => card.id != dataId)
    );
  };
  return (
    <li className="w-[240px] flex flex-col items-center space-y-1 rounded-md p-3 bg-[#333]/30 transition-all hover:scale-105 shadow-md">
      <Image
        src={"https://placehold.co/80x80/png"}
        alt="Inspector"
        height={70}
        width={70}
        className="rounded-full"
      />
      <h3 className="font-semibold text-lg">{data.name}</h3>
      <span className="font-medium text-base">{data.job}</span>
      <div className="flex flex-col">
        <span className="text-sm">
          <span className="font-medium text-base">Email: </span>
          {data.email}
        </span>
        <span className="text-sm">
          <span className="font-medium text-base">Phone: </span>
          {data.phone}
        </span>
        <span className="text-sm">
          <span className="font-medium text-base">Info: </span>
          {data.description}
        </span>
      </div>
      <div className="flex items-center space-x-5 text-2xl pt-2">
        <MdOutlineSecurityUpdateGood className="text-dark_blue hover:text-lightest_blue" />
        <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
        <MdDeleteOutline
          onClick={() => handleDelete(data.id)}
          className="text-dark_blue hover:text-red-500"
        />
      </div>
    </li>
  );
};

export default InspectorCard;
