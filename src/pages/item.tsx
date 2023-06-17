import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { Filter } from "@/components";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { RegisterItem } from "@/components";
import { ItemProps } from "../../types/types";
import { API_REQUEST } from "@/services/api.service";
import { GetServerSideProps } from "next";
import { ItemExData } from "@/data/testData";
//Component
const Item = () => {
  const [itemSearch, setItemSearch] = useState("");
  const [itemData, setItemData] = useState(ItemExData);
  const [close, setClose] = useState(false);
  const [popup, setPopup] = useState(false);
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  ///Delete function
  const handleDelete = (dataId: number) => {
    setItemData((current: ItemProps[]) =>
      current.filter((card: ItemProps) => card.idx != dataId)
    );
  };
  const filteredItems = itemData.filter((item) =>
    item.check_item.toLowerCase().includes(itemSearch.toLowerCase())
  );
  return (
    <div className="text-black">
      <Head>
        <title>Inspection Item</title>
      </Head>
      <RegisterItem close={close} toggleHandler={toggleHandler} />
      <div className="flex flex-col py-5 px-5 space-y-4">
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
              <span className="ml-3 text-light_blue">
                {filteredItems.length}
              </span>
            </h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search inspection target.."
                value={itemSearch}
                onChange={(e) => setItemSearch(e.target.value)}
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium min-w-[30px]">No</span>
            <span className="text-lg font-medium min-w-[250px]">Item name</span>
            <span className="text-lg font-medium min-w-[150px]">
              Large Category
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Middle Category
            </span>
            <span className="text-lg font-medium min-w-[80px]">Date</span>
            <div className="flex items-center space-x-4 justify-center min-w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.idx}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md hover:scale-100 cursor-pointer"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg w-[250px] ">{item.check_item}</span>
                <span className="text-lg w-[160px]">
                  {item.check_class.check_class}
                </span>
                <span className="text-lg w-[150px]">
                  {item.checkSubClass.check_class}
                </span>
                <span className="text-lg min-w-[80px]">{item.create_dt}</span>

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

// interface ItemPageProps {
//   check_item: ItemProps[];
// }
// export const getServerSideProps: GetServerSideProps<
//   ItemPageProps
// > = async () => {
//   try {
//     const response = await fetch(API_REQUEST.check_item);
//     if (!response.ok) {
//       throw new Error("Failed to fetch inspection item data");
//     }
//     const check_item = await response.json();
//     return {
//       props: {
//         check_item,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fecht inspection item data:", error);
//     return {
//       props: {
//         check_item: [],
//       },
//     };
//   }
// };
