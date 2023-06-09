import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { PrimaryHeader, ButtonPrimary } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import InspectorCard from "@/components/inspectorCard/inspectorCard";
import { v4 as uuid_v4 } from "uuid";
import { CreateInspector } from "@/components";
import { API_REQUEST } from "@/services/api.service";
import { InspectorProps } from "../../types/types";
export const dataBase = [
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
  {
    id: uuid_v4(),
    name: "Donalt Trump",
    job: "Inspector in Tech Lab",
    email: "trump@gmail.com",
    phone: "0107777777",
    description: "10 years of experience in his field",
    image: "https://placehold.co/600x400",
  },
];

const Inspectors = ({ inspector }: { inspector: InspectorProps[] }) => {
  const [inspectorData, setinspectorData] = useState(inspector);
  const [close, setClose] = useState(false);
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
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
        <div className="bg-primary_white shadow-lg px-4 py-2 rounded-md flex items-center justify-between  border-l-8 border-dark_blue">
          <h4 className="font-medium">
            No: <span className="text-red-500">10</span>
          </h4>
          <div className="flex items-center space-x-3">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search an inspector.."
              className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
            />
            <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
              <BiSearchAlt className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
        <CreateInspector close={close} toggleHandler={toggleHandler} />
        <ul className="list-none flex flex-wrap gap-3 justify-center">
          {inspectorData.map((item: InspectorProps) => {
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

export const getServerSideProps = async () => {
  const [inspector] = await Promise.all([
    fetch(API_REQUEST.inspector).then((res) => res.json()),
  ]);

  return {
    props: {
      inspector,
    },
  };
};
