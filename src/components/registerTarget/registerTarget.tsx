import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

const RegisterTarget = ({
  close,
  toggleHandler,
}: {
  close: boolean;
  toggleHandler: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 ${
        !close ? "hidden" : "flex"
      } items-center justify-center w-full h-full bg-gray-300/90 overflow-hidden`}
    >
      <div className="relative min-w-[700px] flex flex-col bg-white shadow-xl px-8 py-5 rounded-md space-y-3 ">
        <AiOutlineClose
          onClick={toggleHandler}
          className="absolute top-4 right-4 text-xl hover:text-red-700 cursor-pointer"
        />
        <div className="text-center pb-2">
          <SecondaryHeader title="Resgister an Inspection Target" />
        </div>
        <Formik
          initialValues={{
            tagName: "",
            tagId: "",
            items: [],
          }}
          validationSchema={Yup.object({
            tagName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            tagId: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm({
              values: {
                tagName: "",
                tagId: "",
                items: [],
              },
            });
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          <Form className="flex flex-col space-y-3">
            <label className="text-lg font-semibold" htmlFor="tagName">
              Target Name
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter a target name..."
              name="tagName"
              type="text"
            />
            <ErrorMessage name="tagName" />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="tagId">
              Tag ID
            </label>{" "}
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter a tag ID..."
              name="tagId"
              type="text"
            />
            <ErrorMessage name="tagId" />
            {/*  */}
            <Select
              title="Select an Item"
              placeholder="Select inspection item"
            />
            {/*  */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-4 w-[350px]">
                <label className="text-lg font-semibold" htmlFor="schedule">
                  Select an inspection schedule
                </label>
                <Field
                  name="schedule"
                  as="select"
                  className="rounded-md px-4 py-2 border-2 border-slate-350"
                >
                  <option value="anytime">Anytime</option>
                  <option value="everyday">Every day</option>
                  <option value="everyweek">Every week</option>
                  <option value="everymonth">Every Month</option>
                </Field>
              </div>
              <div className="flex flex-col space-y-4 ">
                <label className="text-lg font-semibold" htmlFor="">
                  Date range
                </label>
                <Field
                  name="schedule"
                  as="select"
                  className="rounded-md px-4 py-2 border-2 border-slate-350"
                >
                  <option value="anytime">Anytime</option>
                  <option value="everyday">Every day</option>
                  <option value="everyweek">Every week</option>
                  <option value="everymonth">Every Month</option>
                </Field>
              </div>
            </div>
            {/*  */}
            <Select
              title="Select an Inspector"
              placeholder="Select inspectors"
            />
            <div className="flex items-center justify-between pt-4 space-x-6">
              <button
                className="bg-gray-300 py-2 px-8 rounded-md text-black font-semibold min-w-[190px]"
                type="reset"
              >
                Reset
              </button>
              <button
                className="bg-light_blue py-2 px-8 rounded-md text-white font-semibold min-w-[190px]"
                type="submit"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterTarget;

export const Select = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
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
        <label
          className="text-lg font-medium flex items-center justify-between border-b-2 p-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white"
          htmlFor="items"
        >
          Fire Extingusher{" "}
          <Field
            className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            value="One"
            name="items"
            type="checkbox"
          />
        </label>
        {/*  */}
        <label
          className="text-lg font-medium flex items-center justify-between border-b-2 p-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white"
          htmlFor="items"
        >
          Pump and pressure chember{" "}
          <Field
            className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            value="two"
            name="items"
            type="checkbox"
          />
        </label>
        {/*  */}
        <label
          className="text-lg font-medium flex items-center justify-between border-b-2 p-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-white"
          htmlFor="items"
        >
          Fire extingusher{" "}
          <Field
            className="cursor-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            value="tree"
            name="items"
            type="checkbox"
          />
        </label>
        {/*  */}
      </div>
    </>
  );
};
