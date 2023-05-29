import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
const Filter = () => {
  const [filterWord, setFilterWord] = useState(["Checked", "Recently"]);

  return (
    <div className="bg-primary_white shadow-lg px-4 py-4 rounded-md flex items-center justify-between border-l-8 border-dark_blue">
      <span className="text-xl">Filter:</span>
      <div className="flex items-center space-x-2">
        {filterWord.map((item, index) => (
          <FilterButton name={item} key={index} />
        ))}
        <Formik
          initialValues={{ filterName: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const newFilterWord = [...filterWord, values.filterName];
              setFilterWord(newFilterWord);
              setSubmitting(false);
            }, 200);
          }}
        >
          <Form className="flex items-center space-x-1">
            <Field
              type="text"
              name="filterName"
              placeholder="Enter filter"
              className="flex items-center lg:w-[150px] rounded-l-3xl px-4 border-2 border-black text-black text-sm h-[33px] focus:outline focus:outline-green-300 "
            />
            <button
              type="submit"
              className="text-lg border-2 rounded-r-3xl py-0 px-5 border-black font-medium cursor-pointer hover:border-light_blue"
            >
              +Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Filter;

export const FilterButton = ({ name }: { name: string }) => {
  return (
    <div className="text-lg border-2 rounded-3xl py-0 px-5 border-gray-500/70 text-gray-500 cursor-pointer hover:text-black hover:border-black">
      {name}
    </div>
  );
};
