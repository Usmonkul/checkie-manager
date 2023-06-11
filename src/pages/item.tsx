import React from "react";
import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { Filter } from "@/components";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { RegisterItem } from "@/components";
// import { v4 as uuid_v4 } from "uuid";
import { ItemDataProps, ItemProps } from "../../types/types";
import ItemPopup from "@/components/registerItem/itemPopup";
import { API_REQUEST } from "@/services/api.service";
import { GetServerSideProps } from "next";
const Item = ({ check_item }: { check_item: ItemProps[] }) => {
  const [close, setClose] = useState(false);
  const [popup, setPopup] = useState(false);
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  const [itemData, setItemData] = useState(check_item);
  const handleDelete = (dataId: number) => {
    setItemData((current: ItemProps[]) =>
      current.filter((card: ItemProps) => card.idx != dataId)
    );
  };
  return (
    <div className="text-black">
      <Head>
        <title>Inspection Item</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <RegisterItem close={close} toggleHandler={toggleHandler} />
        <div className="flex items-center justify-between ">
          <PrimaryHeader title="Inspection Item" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Register Item" />
          </div>
        </div>
        <Filter />
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-medium text-lg">
              Inspection items:{" "}
              <span className="ml-3 text-light_blue">{check_item.length}</span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search inspection target.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium min-w-[30px]">No</span>
            <span className="text-lg font-medium min-w-[150px]">
              Detail Item
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Large Category
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Middle Category
            </span>
            <span className="text-lg font-medium min-w-[150px]">Date</span>
            <span className="text-lg font-medium min-w-[150px]">
              Modified Date
            </span>
            <div className="flex items-center space-x-4 justify-center min-w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {itemData.map((item, index) => {
            return (
              <div
                key={item.idx}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md hover:scale-100 cursor-pointer"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg w-[150px]  truncate">
                  {item.check_item}
                </span>
                <span className="text-lg w-[160px] truncate">
                  {item.checkClass.check_class}
                </span>
                <span className="text-lg w-[150px] truncate">
                  {item.checkSubClass.check_sub_class}
                </span>
                <span className="text-lg min-w-[150px]">{item.create_dt}</span>
                <span className="text-lg min-w-[150px]">{item.update_dt}</span>
                <div className="flex items-center space-x-7 text-2xl min-w-[100px]">
                  <MdOutlineModeEdit
                    className="text-dark_blue hover:text-lightest_blue"
                    onClick={() => setPopup((prev) => !prev)}
                  />
                  <MdDeleteOutline
                    onClick={() => handleDelete(item.idx)}
                    className="text-dark_blue hover:text-red-500"
                  />
                </div>
                {/* {popup && <ItemPopup />} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Item;

interface ItemPageProps {
  check_item: ItemProps[];
}
export const getServerSideProps: GetServerSideProps<
  ItemPageProps
> = async () => {
  try {
    const response = await fetch(API_REQUEST.check_item);
    if (!response.ok) {
      throw new Error("Failed to fetch inspection item data");
    }
    const check_item = await response.json();
    return {
      props: {
        check_item,
      },
    };
  } catch (error) {
    console.error("Failed to fecht inspection item data:", error);
    return {
      props: {
        check_item: [],
      },
    };
  }
};
// //Data for experiment
// export const ItemData = [
//   {
//     id: uuid_v4(),
//     check_item: "Power Pressure check",
//     checkClass: "large",
//     checkSubClass: "Basic",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
//   {
//     id: uuid_v4(),
//     check_item: "Power Pressure check",
//     checkClass: "large",
//     checkSubClass: "Basic",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
// ];
