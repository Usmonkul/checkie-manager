import { useState } from "react";
import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { uuid } from "uuidv4";
import { MdDeleteOutline } from "react-icons/md";
import { DraftDataProps } from "../../types/types";
const Draft = () => {
  const [draftData, setDraftData] = useState(DraftData);
  const handleDelete = (dataId: string) => {
    setDraftData((current: DraftDataProps[]) =>
      current.filter((card: DraftDataProps) => card.id != dataId)
    );
  };
  return (
    <div className="text-black">
      <Head>
        <title>Inspection Draft</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <PrimaryHeader title="Inspection Darft Query" />
        {/*  */}
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-bold text-lg">
              Inspection Draft Query:{" "}
              <span className="ml-3 text-light_blue">100</span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium min-w-[30px]">No</span>
            <span className="text-lg font-medium min-w-[150px]">Title</span>
            <span className="text-lg font-medium min-w-[150px]">Inspector</span>
            <span className="text-lg font-medium min-w-[150px]">
              Inspection Date
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Registered Date
            </span>
            <span className="text-lg font-medium min-w-[150px]">Progress</span>
            <span className="text-lg font-medium min-w-[150px]">
              Complation Date
            </span>
            <div className="flex items-center space-x-4 justify-center min-w-[100px]">
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* card Items */}
        <div className="flex flex-col space-y-1">
          {draftData.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg min-w-[150px]">{item.title}</span>
                <span className="text-lg min-w-[150px]">{item.inspector}</span>
                <span className="text-lg min-w-[150px]">
                  {item.inspectionDate}
                </span>
                <span className="text-lg min-w-[150px]">
                  {item.registeredDate}
                </span>
                <span className="text-lg min-w-[150px]">{item.progress}</span>
                <span className="text-lg min-w-[150px]">
                  {item.complationDate}
                </span>
                <div className="flex items-center justify-center space-x-7 text-2xl min-w-[100px]">
                  <MdDeleteOutline
                    onClick={() => handleDelete(item.id)}
                    className="text-dark_blue hover:text-red-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Draft;

export const DraftData = [
  {
    id: uuid(),
    title: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    inspectionDate: "2011.03.09",
    registeredDate: "2010.04.03",
    progress: "Success",
    complationDate: "2010.04.03",
  },
  {
    id: uuid(),
    title: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    inspectionDate: "2011.03.09",
    registeredDate: "2010.04.03",
    progress: "Success",
    complationDate: "2010.04.03",
  },
  {
    id: uuid(),
    title: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    inspectionDate: "2011.03.09",
    registeredDate: "2010.04.03",
    progress: "Success",
    complationDate: "2010.04.03",
  },
  {
    id: uuid(),
    title: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    inspectionDate: "2011.03.09",
    registeredDate: "2010.04.03",
    progress: "Success",
    complationDate: "2010.04.03",
  },
];
