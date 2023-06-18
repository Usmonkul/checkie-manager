import { SecondaryHeader } from "@/utils/utils";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid_v4 } from "uuid";
import { FormInputLarge } from "../formFiels/formFields";
import { InspectorProps } from "../../../types/types";
// import { dataBase } from "@/pages/inspectors";

const CreateInspector = ({
  close,
  toggleHandler,
  inspectorData,
  setinspectorData,
}: {
  inspectorData: InspectorProps[];
  setinspectorData: (newInspectors: InspectorProps[]) => void;
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
          }}
          validationSchema={Yup.object({
            inspector_name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            inspector_tel: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            inspector_email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            inspector_description: Yup.string().max(
              30,
              "Must be 30 characters or less"
            ),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const randomNum = Math.floor(Math.random() * 1000);
            const newInspectors = [
              {
                idx: randomNum,
                inspector_name: values.inspector_name,
                inspector_tel: values.inspector_tel,
                inspector_email: values.inspector_email,
                inspector_title: "Inspector in Science Lab",
                inspector_description: values.inspector_description,
                inspector_image: "https://placehold.co/600x400",
                del_yn: "N",
                create_by: "admin",
                create_dt: "2022-05-02",
                update_by: "admin",
                validation: true,
                update_dt: "2022-05-02",
              },
              ...inspectorData,
            ];
            setinspectorData(newInspectors);
            // const JSONdata = JSON.stringify(data);
            // console.log(JSONdata);
            // const endpoint =
            //   "http://idrenvision.iptime.org:8089/inspector/insert";
            // const options = {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSONdata,
            // };
            // const response = await fetch(endpoint, options);
            // const result = await response.json();
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form className="flex flex-col space-y-3">
            <FormInputLarge
              name="inspector_name"
              placeholder="Enter an inspector name..."
              type="text"
              label="Inspector Name"
            />
            {/*  */}
            <FormInputLarge
              name="inspector_tel"
              placeholder="Enter an inspector number..."
              type="text"
              label="Target Number"
            />
            {/*  */}
            <FormInputLarge
              name="inspector_email"
              placeholder="Enter an inspector email..."
              type="email"
              label="Target Email"
            />
            {/*  */}
            <FormInputLarge
              name="inspector_description"
              placeholder="Enter a description..."
              type="text"
              label="Description"
            />
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
