import { SecondaryHeader } from "@/utils/utils";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid_v4 } from "uuid";
// import { dataBase } from "@/pages/inspectors";

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
            inspector_name: "",
            inspector_tel: "",
            inspector_email: "",
            inspector_description: "",
            inspector_image: "",
          }}
          validationSchema={Yup.object({
            inspector_name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            inspector_tel: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            inspector_email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            inspector_description: Yup.string().max(
              30,
              "Must be 20 characters or less"
            ),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const data = {
              idx: parseInt(uuid_v4()),
              inspector_name: values.inspector_name,
              inspector_tel: values.inspector_tel,
              inspector_email: values.inspector_email,
              inspector_description: values.inspector_description,
              inspector_image: "https://placehold.co/600x400",
              del_yn: "",
              create_by: "admin",
              create_dt: "",
              update_by: "",
              update_dt: "",
            };
            const JSONdata = JSON.stringify(data);
            console.log(JSONdata);
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
            resetForm({
              values: {
                inspector_name: "",
                inspector_tel: "",
                inspector_email: "",
                inspector_description: "",
                inspector_image: "",
              },
            });
          }}
        >
          <Form className="flex flex-col space-y-3">
            <label className="text-lg font-semibold" htmlFor="inspector_name">
              Inspector Name
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector name..."
              name="inspector_name"
              type="text"
            />
            <ErrorMessage name="inspector_name">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="inspector_tel">
              Inspector Number
            </label>{" "}
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector number..."
              name="inspector_tel"
              type="text"
            />
            <ErrorMessage name="inspector_tel">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="inspector_email">
              Inspector Email
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter an inspector email..."
              name="inspector_email"
              type="email"
            />
            <ErrorMessage name="inspector_email">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
            {/*  */}
            <label
              className="text-lg font-semibold"
              htmlFor="inspector_description"
            >
              Description
            </label>
            <Field
              className="rounded-md px-4 py-2 border-2 border-slate-350"
              placeholder="Enter a description..."
              name="inspector_description"
              type="text"
            />
            <ErrorMessage name="inspector_description" />
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
