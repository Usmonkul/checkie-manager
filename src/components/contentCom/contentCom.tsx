import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
const ContentCom = ({
  inputType,
  name,
}: {
  inputType: "textarea" | "radio" | "checkbox";
  name: string;
}) => {
  const [typeSelect, setTypeSelect] = useState("");
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeSelect(event.target.value);
  };
  return (
    <div className="rounded-md px-4 py-2 border-2 border-slate-350">
      <div>
        <Field
          placeholder="Enter a text content..."
          as="textarea"
          name="content"
          className="w-full border-b-2 p-2"
        />
      </div>
      {typeSelect === "radio" && (
        <div className="flex flex-col space-y-3 w-full border-b-2 p-2">
          <label className="flex items-center space-x-4">
            <Field
              className=" w-4 h-4"
              type="radio"
              name="radio1"
              value="Option 1"
            />
            <Field
              className="border-2 rounded-md p-1"
              placeholder="Enter a text"
              type="text"
              name="radio1Input"
            />
          </label>
          <label className="flex items-center space-x-4">
            <Field
              className=" w-4 h-4"
              type="radio"
              name="radio2"
              value="Option 2"
            />
            <Field
              className="border-2 rounded-md p-1"
              placeholder="Enter a text"
              type="text"
              name="radio2Input"
            />
          </label>
        </div>
      )}
      {typeSelect === "checkbox" && (
        <div className="flex flex-col space-y-3 w-full border-b-2 p-2">
          <label className="flex items-center space-x-4">
            <Field
              className=" w-4 h-4"
              type="checkbox"
              name="checkbox1"
              value="Option 1"
            />
            <Field
              className="border-2 rounded-md p-1"
              placeholder="Enter a text"
              type="text"
              name="checkbox1Input"
            />
          </label>
          <label className="flex items-center space-x-4">
            <Field
              className=" w-4 h-4"
              type="checkbox"
              name="checkbox2"
              value="Option 2"
            />
            <Field
              className="border-2 rounded-md p-1"
              placeholder="Enter a text"
              type="text"
              name="checkbox2Input"
            />
          </label>
        </div>
      )}
      <div className="py-2 flex items-center justify-between">
        <select
          value={typeSelect}
          onChange={handleTypeChange}
          className="border-2 py-1 px-4 rounded-md min-w-[200px] text-lg"
        >
          <option value="textarea">Textarea</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
        </select>
        <div className="flex items-center justify-end space-x-7 text-2xl min-w-[100px] ">
          <HiOutlineDuplicate className="text-dark_blue hover:text-lightest_blue " />
          <MdDeleteOutline className="text-dark_blue hover:text-red-500 " />
        </div>
      </div>
    </div>
  );
};

export default ContentCom;
