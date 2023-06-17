import Head from "next/head";
import { useState } from "react";
import { PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { HistoryExData } from "@/data/testData";
const History = () => {
  const [historyData, setHistoryData] = useState(HistoryExData);
  const [historySearch, setHistorySearch] = useState("");

  //Search Function
  const filteredInspectors = historyData.filter((item) =>
    item.name.toLowerCase().includes(historySearch.toLowerCase())
  );
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
              <span className="ml-3 text-light_blue">
                {filteredInspectors.length}
              </span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search.."
                value={historySearch}
                onChange={(e) => setHistorySearch(e.target.value)}
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium w-[30px]">No</span>
            <span className="text-lg font-medium w-[300px]">Target</span>
            <span className="text-lg font-medium w-[250px]">Inspector</span>
            <span className="text-lg font-medium w-[200px]">Date</span>
          </div>
        </div>
        {/* card Items */}
        <div className="flex flex-col space-y-1">
          {filteredInspectors.map((item, index) => (
            <HistoryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default History;

//Item
export const HistoryItem = ({
  item,
  index = 1,
}: {
  item: any;
  index: number;
}) => {
  return (
    <div className="bg-primary_white px-4 py-3 flex items-center justify-between border-l-8 border-transparent shadow-lg rounded-md">
      <span className="text-lg font-medium w-[30px]">{index + 1}</span>
      <span className="text-lg w-[300px]">{item.name}</span>
      <span className="text-lg w-[250px]">{item.inspector}</span>
      <span className="text-lg w-[200px]">{item.date}</span>
    </div>
  );
};
