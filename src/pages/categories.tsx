import React from "react";
import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { CreateCategory, Filter } from "@/components";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import {
  CategoryProps,
  MCategoryProps,
  LCategoryProps,
} from "../../types/types";
import { GetServerSideProps } from "next";
import { API_REQUEST } from "@/services/api.service";
import { array } from "yup";

//Page
const Categories = ({
  categoryL,
  categoryM,
}: {
  categoryL: LCategoryProps[];
  categoryM: MCategoryProps[];
}) => {
  const [close, setClose] = useState(false);
  const [categoryData, setCategoryData] = useState(CategoryData);
  const [selectedOption, setSelectedOption] = useState("");
  const [datab, setDatab] = useState([...categoryL, ...categoryM]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event?.target.value);
  };
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  const handleDelete = (dataId: string) => {
    setCategoryData((current: CategoryProps[]) =>
      current.filter((card: CategoryProps) => card.id != dataId)
    );
  };
  let data;

  if (selectedOption === "large") {
    data = categoryData.filter((item) => item.category === "large");
  } else if (selectedOption === "middle") {
    data = categoryData.filter((item) => item.category === "middle");
  } else {
    data = categoryData;
  }

  return (
    <div className="text-black">
      <Head>
        <title>Inspection Categories</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <CreateCategory
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          close={close}
          toggleHandler={toggleHandler}
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
                {CategoryData.length}
              </span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search category.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium min-w-[30px]">ID</span>
            <span className="text-lg font-medium min-w-[150px]">
              Category name
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Category Type
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Registered Date
            </span>
            <div className="flex items-center space-x-4 justify-center min-w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {datab.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg min-w-[150px]">
                  {item.check_class || item.check_sub_class}
                </span>
                <span className="text-lg min-w-[150px]">
                  {item.check_class?.length ? "Large" : "Middle"}
                </span>
                <span className="text-lg min-w-[150px]">{item.create_dt}</span>
                <div className="flex items-center space-x-7 text-2xl min-w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
                  <MdDeleteOutline
                    // onClick={() => handleDelete(index)}
                    className="text-dark_blue hover:text-red-500"
                  />
                </div>
              </div>
            );
          })}
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg min-w-[150px]">{item.name}</span>
                <span className="text-lg min-w-[150px]">
                  {item.category === "large" ? "Large" : "Middle"}
                </span>
                <span className="text-lg min-w-[150px]">
                  {item.registeredDate}
                </span>
                <div className="flex items-center space-x-7 text-2xl min-w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
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

export default Categories;

interface CategoryPageProps {
  categoryL: LCategoryProps[];
  categoryM: MCategoryProps[];
}
export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  try {
    const lResponse = await fetch(API_REQUEST.categoryL);
    const mResponse = await fetch(API_REQUEST.categoryM);
    if (!lResponse.ok) {
      throw new Error("Failed to fetch inspection item data");
    } else if (!mResponse.ok) {
      throw new Error("Failed to fetch inspection item data");
    }
    const categoryL = await lResponse.json();
    const categoryM = await mResponse.json();
    return {
      props: {
        categoryL,
        categoryM,
      },
    };
  } catch (error) {
    console.error("Failed to fecht inspection item data:", error);
    return {
      props: {
        categoryL: [],
        categoryM: [],
      },
    };
  }
};

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
function useEffect(arg0: () => void, arg1: (typeof array)[]) {
  throw new Error("Function not implemented.");
}
