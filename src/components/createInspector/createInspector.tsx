import { ButtonPrimary, SecondaryHeader } from "@/utils/utils";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid_v4 } from "uuid";
import { dataBase } from "@/pages/inspectors";

const CreateInspector = ({
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
      <div className="relative max-w-[500px] flex flex-col bg-white shadow-xl p-8 rounded-md space-y-3 ">
        <AiOutlineClose
          onClick={toggleHandler}
          className="absolute top-4 right-4 text-xl hover:text-red-700 cursor-pointer"
        />
        <div className="text-center">
          <SecondaryHeader title="Register Inspector" />
        </div>
        <Formik
          initialValues={{
            inspectorName: "",
            inspectorNumber: "",
            inspectorEmail: "",
            description: "",
          }}
          validationSchema={Yup.object({
            inspectorName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            inspectorNumber: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            inspectorEmail: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            description: Yup.string().max(20, "Must be 20 characters or less"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dataBase.push({
              id: uuid_v4(),
              name: values.inspectorName,
              job: "Inspector in Tech Lab",
              email: values.inspectorEmail,
              phone: values.inspectorNumber,
              description: values.description,
              image: "https://placehold.co/600x400",
            });
            setSubmitting(false);
            resetForm({
              values: {
                inspectorName: "",
                inspectorNumber: "",
                inspectorEmail: "",
                description: "",
              },
            });
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          <Form className="flex flex-col space-y-3">
            <label className="text-lg font-semibold" htmlFor="inspectorName">
              Inspector Name
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector name..."
              name="inspectorName"
              type="text"
            />
            <ErrorMessage name="inspectorName" />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="inspectorNumber">
              Inspector Number
            </label>{" "}
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector number..."
              name="inspectorNumber"
              type="text"
            />
            <ErrorMessage name="inspectorNumber" />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="inspectorEmail">
              Inspector Email
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector email..."
              name="inspectorEmail"
              type="email"
            />
            <ErrorMessage name="inspectorEmail" />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="description">
              Description
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter a description..."
              name="description"
              type="text"
            />
            <ErrorMessage name="description" />
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
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateInspector;
