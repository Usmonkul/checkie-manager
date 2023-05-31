import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import ContentCom from "../contentCom/contentCom";
const RegisterItem = ({
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
          <SecondaryHeader title="Resgister an Inspection Item" />
        </div>
        <Formik
          initialValues={{
            itemName: "",
            largeCategory: "",
            MiddleCategory: "",
          }}
          validationSchema={Yup.object({
            itemName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm({
              values: {
                itemName: "",
                largeCategory: "",
                MiddleCategory: "",
              },
            });
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          <Form className="flex flex-col space-y-3">
            <label className="text-lg font-semibold" htmlFor="itemName">
              Item Name
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an item name..."
              name="itemName"
              type="text"
            />
            <ErrorMessage name="itemName" />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="">
              Select Large Category
            </label>
            <Field
              name="largeCategory"
              as="select"
              className="rounded-md px-4 py-2 border-2 border-slate-350"
            >
              <option value="red">Lab</option>
              <option value="green">W19</option>
              <option value="blue">Finance Building</option>
            </Field>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="">
              Select Middle Category
            </label>
            <Field
              name="middleCategory"
              as="select"
              className="rounded-md px-4 py-2 border-2 border-slate-350"
            >
              <option value="red">basic</option>
              <option value="green">Toilet</option>
              <option value="blue">102 room</option>
            </Field>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="">
              Content
            </label>
            <ContentCom inputType="textarea" />

            {/*  */}
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

export default RegisterItem;
