import Head from "next/head";
import { PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { v4 as uuid_v4 } from "uuid";
const History = () => {
  return (
    <div className="text-black">
      <Head>
        <title>Inspection History</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <PrimaryHeader title="Inspection History" />
        {/*  */}
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-bold text-lg">
              Inspection History:{" "}
              <span className="ml-3 text-light_blue">{HistoryData.length}</span>
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
            <span className="text-lg font-medium min-w-[150px]">Target</span>
            <span className="text-lg font-medium min-w-[150px]">Inspector</span>
            <span className="text-lg font-medium min-w-[150px]">Date</span>
          </div>
        </div>
        {/* card Items */}
        <div className="flex flex-col space-y-1">
          {HistoryData.map((item, index) => (
            <HistoryItem item={item} index={index} />
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default History;
export const HistoryItem = ({
  item,
  index = 1,
}: {
  item: any;
  index: number;
}) => {
  return (
    <div
      key={item.id}
      className="bg-primary_white px-4 py-3 flex items-center justify-between border-l-8 border-transparent shadow-lg rounded-md"
    >
      <span className="text-lg font-medium min-w-[30px]">{index + 1}</span>
      <span className="text-lg min-w-[150px]">{item.name}</span>
      <span className="text-lg min-w-[150px]">{item.inspector}</span>
      <span className="text-lg min-w-[150px]">{item.date}</span>
    </div>
  );
};

export const HistoryData = [
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Fire Inspection Zone",
    inspector: "Donalt J Trump",
    date: "2011.03.09",
  },
];
