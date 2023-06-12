import { useState } from "react";
import { ErrorMessage, Field } from "formik";
import { AiOutlineArrowDown } from "react-icons/ai";
export const Select = ({
  placeholder,
  title,
  info,
}: {
  placeholder: string;
  title: string;
  info: { label: string; value: string; name: string }[];
}) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected((prev) => !prev);
  return (
    <>
      <span className="text-lg font-semibold">{title}</span>
      <button
        type="button"
        onClick={() => toggleSelected()}
        className="z-10 rounded-md px-4 py-2 border-2 border-slate-350 text-lg flex items-center justify-between"
      >
        {placeholder}
        <AiOutlineArrowDown className="text-xl" />
      </button>
      <div
        className={`${
          selected ? "block" : "hidden"
        } border border-t-0 transition-all duration-150 max-h-[150px] overflow-scroll overflow-x-hidden`}
      >
        {info.map((item) => (
          <label
            className="text-lg font-medium flex items-center justify-between border-b-2 p-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white"
            htmlFor="items"
          >
            {item.label}
            <Field
              className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              value={item.value}
              name={item.name}
              type="checkbox"
            />
          </label>
        ))}
        {/*  */}
      </div>
    </>
  );
};

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div className="w-full mb-5">
      <label className="text-lg font-medium block mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        name={name}
        type={type}
        className="w-full bg-gray-300 rounded-md px-3 py-3 outline-light_blue"
        placeholder={placeholder}
        autoComplete="current-password"
      />
      <ErrorMessage name={name}>
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export const FormInputLarge = ({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-lg font-semibold mb-3" htmlFor={name}>
        {label}
      </label>
      <Field
        className="rounded-md px-4 py-2 border-2 border-slate-350"
        placeholder={placeholder}
        name={name}
        type={type}
      />
      <ErrorMessage name={name}>
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
