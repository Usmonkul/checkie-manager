import { ButtonPrimary, SecondaryHeader } from "@/utils/utils";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateInspector = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-300/90 overflow-hidden">
      <div className="max-w-[500px] flex flex-col bg-white shadow-xl p-8 rounded-md space-y-3 ">
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
              placeholder="Enter an inspector name..."
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
              placeholder="Enter an inspector name..."
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
              placeholder="Enter an inspector name..."
              name="description"
              type="text"
            />
            <ErrorMessage name="description" />
            {/*  */}
            <div className="flex items-center justify-between pt-4 space-x-6">
              <button
                className="bg-light_blue py-2 px-8 rounded-md text-white font-semibold min-w-[190px]"
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
