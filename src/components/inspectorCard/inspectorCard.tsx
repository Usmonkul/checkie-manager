import Image from "next/image";
import React from "react";
import {
  MdDeleteOutline,
  MdOutlineModeEdit,
  MdOutlineSecurityUpdateGood,
} from "react-icons/md";
import { InspectorProps } from "../../../types/types";
const InspectorCard = ({
  data,
  setinspectorData,
}: {
  data: InspectorProps;
  setinspectorData: any;
}) => {
  const handleDelete = (dataId: number) => {
    setinspectorData((current: InspectorProps[]) =>
      current.filter((card: InspectorProps) => card.idx !== dataId)
    );
  };
  return (
    <li className="w-[300px] flex flex-col items-center space-y-2 rounded-md p-5 bg-[#333]/30 transition-all hover:scale-105 shadow-md">
      <Image
        src={"https://placehold.co/80x80/png"}
        alt="Inspector"
        height={80}
        width={80}
        className="rounded-full"
      />
      <h3 className="font-semibold text-2xl">{data.inspector_name}</h3>
      <span className="font-medium text-lg">{data.inspector_title}</span>
      <div className="flex flex-col space-y-1">
        <span className="text-md">
          <span className="font-medium text-base">Email: </span>
          {data.inspector_email}
        </span>
        <span className="text-md">
          <span className="font-medium text-base">Phone: </span>
          {data.inspector_tel}
        </span>
        <span className="text-md">
          <span className="font-medium text-base text-center">Info: </span>
          {data.inspector_description}
        </span>
      </div>
      <div className="flex items-center space-x-6 text-3xl pt-2">
        <MdOutlineSecurityUpdateGood className="text-dark_blue hover:text-lightest_blue" />
        <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
        <MdDeleteOutline
          onClick={() => handleDelete(data.idx)}
          className="text-dark_blue hover:text-red-500"
        />
      </div>
    </li>
  );
};

export default InspectorCard;
