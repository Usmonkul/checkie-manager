import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
const ContentCom = ({
  inputType,
}: {
  inputType: "textarea" | "radio" | "checkbox";
}) => {
  return (
    <div className="rounded-md px-4 py-2 border-2 border-slate-350">
      {inputType === "textarea" && (
        <div>
          <Field
            placeholder="Enter a text content..."
            as="textarea"
            id="content"
            name="content"
            className="w-full border-b-2 p-2"
          />
        </div>
      )}
      {inputType === "radio" && (
        <div>
          <label>
            <Field type="radio" name="content" value="Option 1" />
            Option 1
          </label>
          <label>
            <Field type="radio" name="content" value="Option 2" />
            Option 2
          </label>
          <ErrorMessage name="content" component="div" />
        </div>
      )}
      {inputType === "checkbox" && (
        <div>
          <label>
            <Field type="checkbox" name="content" value="Option 1" />
            Option 1
          </label>
          <label>
            <Field type="checkbox" name="content" value="Option 2" />
            Option 2
          </label>
          <ErrorMessage name="content" component="div" />
        </div>
      )}
      <div className="py-2 flex items-center justify-between">
        <select className="border-2 py-1 px-4 rounded-md min-w-[200px] text-lg">
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
