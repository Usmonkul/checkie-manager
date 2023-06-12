import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import ContentCom from "../contentCom/contentCom";
import { v4 as uuid_v4 } from "uuid";
import { FormInputLarge } from "../formFiels/formFields";
const RegisterItem = ({
  close,
  toggleHandler,
}: {
  close: boolean;
  toggleHandler: () => void;
}) => {
  return (
    <div
      className={`fixed left-0  top-0 h-auto w-screen z-50 ${
        !close ? "hidden" : "block"
      } overflow-y-scroll bg-gray-300/90 py-10`}
    >
      <div className="relative left-1/2 -translate-x-1/2 w-[700px] h-auto flex flex-col bg-white shadow-xl px-8 py-5 rounded-md space-y-3">
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
            middleCategory: "",
            content: "",
          }}
          validationSchema={Yup.object({
            itemName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const data = {
              idx: parseInt(uuid_v4()),
              inspector_name: values.itemName,
              inspector_tel: values.largeCategory,
              inspector_email: values.middleCategory,
              inspector_description: values.content,
              inspector_image: "https://placehold.co/600x400",
              del_yn: "",
              create_by: "admin",
              create_dt: "",
              update_by: "",
              update_dt: "",
            };
            const JSONdata = JSON.stringify(data);
            alert(JSONdata);
            const endpoint =
              "http://idrenvision.iptime.org:8089/inspector/insert";
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSONdata,
            };
            const response = await fetch(endpoint, options);
            const result = await response.json();
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form className="flex flex-col space-y-3">
            <FormInputLarge
              name="itemName"
              placeholder="Enter an item name..."
              type="text"
              label="Item Name"
            />
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
