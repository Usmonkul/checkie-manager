import React from "react";
import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import { CategoryProps } from "../../types/types";
const Content = () => {
  const [close, setClose] = useState(false);
  const [categoryData, setCategoryData] = useState(CategoryData);

  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  const handleDelete = (dataId: string) => {
    setCategoryData((current: CategoryProps[]) =>
      current.filter((card: CategoryProps) => card.id != dataId)
    );
  };

  return (
    <div className="text-black">
      <Head>
        <title>Inspection Content</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        {/* <CreateCategory
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          close={close}
          toggleHandler={toggleHandler}
        /> */}
        <div className="flex items-center justify-between ">
          <PrimaryHeader title="Inspection Content" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Create Content" />
          </div>
        </div>
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-bold text-lg">Content</h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search content.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium w-[30px]">ID</span>
            <span className="text-lg font-medium w-[200px]">Content name</span>
            <span className="text-lg font-medium w-[200px]">Content</span>
            <div className="flex items-center space-x-4 justify-center w-[100px]">
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {categoryData.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg w-[200px]">{item.name}</span>
                <span className="text-lg w-[200px]">{item.category}</span>

                <div className="flex items-center space-x-7 text-2xl w-[100px]">
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
    </div>
  );
};

export default Content;

export const CategoryData = [
  {
    id: uuid_v4(),
    name: "Category1",
    category: "large",
    registeredDate: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Category2",
    category: "middle",
    registeredDate: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Category3",
    category: "large",
    registeredDate: "2011.03.09",
  },
  {
    id: uuid_v4(),
    name: "Category4",
    category: "middle",
    registeredDate: "2011.03.09",
  },
];