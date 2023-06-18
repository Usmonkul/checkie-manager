import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { RegisterTarget, Filter } from "@/components";
// import { TargetDataProps } from "../../types/types";
// import { API_REQUEST } from "@/services/api.service";
// import { TargetProps } from "../../types/types";
// import { GetServerSideProps } from "next";
import { TargetExData } from "@/data/testData";
//Component
const Target = () => {
  const [close, setClose] = useState(false);
  const [targetSearch, setTargetSearch] = useState("");
  const [targetData, setTargetData] = useState(TargetExData);
  //Toggler
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  //Delete
  const handleDelete = (dataId: number) => {
    setTargetData((current) => current.filter((card) => card.idx !== dataId));
  };
  //Search function
  const filteredTarget = targetData.filter((item) =>
    item.check_group.toLowerCase().includes(targetSearch.toLowerCase())
  );
  return (
    <div className="text-black">
      <Head>
        <title>Inspection target</title>
      </Head>
      <RegisterTarget
        targetData={targetData}
        setTargetData={setTargetData}
        close={close}
        toggleHandler={toggleHandler}
      />
      <div className="flex flex-col py-5 px-5 space-y-4">
        <div className="flex items-center justify-between ">
          <PrimaryHeader title="Inspection Target" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Register Target" />
          </div>
        </div>
        <Filter />
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-medium text-lg">
              Target List:{" "}
              <span className="ml-3 text-light_blue">
                {filteredTarget.length}
              </span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search inspection target.."
                value={targetSearch}
                onChange={(e) => setTargetSearch(e.target.value)}
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium w-[30px]">ID</span>
            <span className="text-lg font-medium w-[350px]">Target</span>
            <span className="text-lg font-medium w-[150px]">
              Registered Date
            </span>
            <span className="text-lg font-medium w-[150px]">Modified Date</span>
            <div className="flex items-center space-x-4 justify-center w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {filteredTarget.map((item, index) => {
            return (
              <div
                key={item.idx}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md hover:scale-100"
              >
                <span className="text-lg font-medium w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg w-[350px]">{item.check_group}</span>
                <span className="text-lg w-[150px]">{item.create_dt}</span>
                <span className="text-lg w-[150px]">{item.update_dt}</span>
                <div className="flex items-center space-x-7 text-2xl w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
                  <MdDeleteOutline
                    onClick={() => handleDelete(item.idx)}
                    className="text-dark_blue hover:text-red-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Target;

// interface TargetPageProps {
//   target: TargetProps[];
// }
// export const getServerSideProps: GetServerSideProps<
//   TargetPageProps
// > = async () => {
//   try {
//     const response = await fetch(API_REQUEST.target);
//     if (!response.ok) {
//       throw new Error("Failed to fetch target data");
//     }
//     const target = await response.json();
//     return {
//       props: {
//         target,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fecht target data:", error);
//     return {
//       props: {
//         target: [],
//       },
//     };
//   }
// };
