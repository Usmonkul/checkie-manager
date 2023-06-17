import React from "react";
import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { CreateCategory, Filter } from "@/components";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { CategoryExData } from "@/data/testData";
import { CategoryProps } from "../../types/types";
import { GetServerSideProps } from "next";
import { API_REQUEST } from "@/services/api.service";

//Page
const Categories = () => {
  const [close, setClose] = useState(false);
  const [categoryData, setCategoryData] = useState(CategoryExData);
  const [selectedOption, setSelectedOption] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  // Filter function
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event?.target.value);
  };
  //toggler
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  //Delete function
  const handleDelete = (dataId: number) => {
    setCategoryData((current: CategoryProps[]) =>
      current.filter((card: CategoryProps) => card.idx != dataId)
    );
  };

  //Search function
  const filteredCategory = categoryData.filter((item) => {
    if (categoryQuery.length) {
      return item.check_class
        ?.toLowerCase()
        .includes(categoryQuery.toLowerCase());
    } else if (selectedOption === "large") {
      return item.del_yn === "large";
    } else if (selectedOption === "middle") {
      return item.del_yn === "middle";
    } else {
      return true;
    }
  });

  return (
    <div className="text-black">
      <Head>
        <title>Inspection Categories</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <CreateCategory
          categoryData={categoryData}
          close={close}
          toggleHandler={toggleHandler}
          setCategoryData={setCategoryData}
        />
        <div className="flex items-center justify-between ">
          <PrimaryHeader title="Inspection Categories" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Create Category" />
          </div>
        </div>
        <Filter
          type="selector"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-bold text-lg">
              Category List No:{" "}
              <span className="ml-3 text-light_blue">
                {filteredCategory.length}
              </span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
                placeholder="Search category.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium w-[30px]">ID</span>
            <span className="text-lg font-medium w-[250px]">Category name</span>
            <span className="text-lg font-medium w-[200px]">Category Type</span>
            <span className="text-lg font-medium w-[150px]">
              Registered Date
            </span>
            <div className="flex items-center space-x-4 justify-center w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {filteredCategory.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg w-[250px]">
                  {item.check_class || item.check_sub_class}
                </span>
                <span className="text-lg w-[200px]">
                  {item.del_yn === "large" ? "Large" : "Middle"}
                </span>
                <span className="text-lg w-[150px]">{item.create_dt}</span>
                <div className="flex items-center space-x-7 text-2xl w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
                  <MdDeleteOutline
                    onClick={() => handleDelete(index)}
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

export default Categories;

// interface CategoryPageProps {
//   categoryL: LCategoryProps[];
//   categoryM: MCategoryProps[];
// }
// export const getServerSideProps: GetServerSideProps<
//   CategoryPageProps
// > = async () => {
//   try {
//     const lResponse = await fetch(API_REQUEST.categoryL);
//     const mResponse = await fetch(API_REQUEST.categoryM);
//     if (!lResponse.ok) {
//       throw new Error("Failed to fetch inspection item data");
//     } else if (!mResponse.ok) {
//       throw new Error("Failed to fetch inspection item data");
//     }
//     const categoryL = await lResponse.json();
//     const categoryM = await mResponse.json();
//     return {
//       props: {
//         categoryL,
//         categoryM,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fecht inspection item data:", error);
//     return {
//       props: {
//         categoryL: [],
//         categoryM: [],
//       },
//     };
//   }
// };
