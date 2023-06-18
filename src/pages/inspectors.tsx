import { useState } from "react";
import Head from "next/head";
import { PrimaryHeader, ButtonPrimary } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import InspectorCard from "@/components/inspectorCard/inspectorCard";
import { CreateInspector } from "@/components";
import { API_REQUEST } from "@/services/api.service";
import { InspectorProps } from "../../types/types";
import { GetServerSideProps } from "next";
import { InspectorExData } from "@/data/testData";
//Component
const Inspectors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectorData, setinspectorData] = useState(InspectorExData);
  const [close, setClose] = useState(false);
  //Toggler
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  //Search Function
  const filteredInspectors = inspectorData.filter((item) =>
    item.inspector_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="text-black">
      <Head>
        <title>Inspectors</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <div className="flex items-center justify-between">
          <PrimaryHeader title="Inspector" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Add Inspector" />
          </div>
        </div>
        <div className="bg-primary_white shadow-lg px-4 py-3 rounded-md flex items-center justify-between  border-l-8 border-dark_blue">
          <h4 className="font-medium">
            Inspectors No:{" "}
            <span className="ml-3 text-light_blue">
              {filteredInspectors.length}
            </span>
          </h4>
          <div className="flex items-center space-x-3">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search an inspector.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
            />
            <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
              <BiSearchAlt className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        <CreateInspector
          close={close}
          toggleHandler={toggleHandler}
          inspectorData={inspectorData}
          setinspectorData={setinspectorData}
        />
        <ul className="list-none flex flex-wrap gap-3 justify-start">
          {filteredInspectors.map((item: InspectorProps) => {
            return (
              <InspectorCard
                key={item.idx}
                setinspectorData={setinspectorData}
                data={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Inspectors;

// interface InspectorsPageProps {
//   inspector: InspectorProps[];
// }
// export const getServerSideProps: GetServerSideProps<
//   InspectorsPageProps
// > = async () => {
//   try {
//     const response = await fetch(API_REQUEST.inspector);
//     if (!response.ok) {
//       throw new Error("Failed to fetch inspector data");
//     }
//     const inspector = await response.json();
//     return {
//       props: {
//         inspector,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fecht inspector data:", error);
//     return {
//       props: {
//         inspector: [],
//       },
//     };
//   }
// };
