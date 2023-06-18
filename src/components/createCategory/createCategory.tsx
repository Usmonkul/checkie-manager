import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuid_v4 } from "uuid";
import { CategoryProps } from "../../../types/types";
import { FormInputLarge } from "../formFiels/formFields";

const CreateCategory = ({
  close,
  toggleHandler,
  categoryData,
  setCategoryData,
}: {
  close: boolean;
  toggleHandler: () => void;
  categoryData: CategoryProps[];
  setCategoryData: (newCategory: CategoryProps[]) => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 ${
        !close ? "hidden" : "flex"
      } items-center justify-center w-full h-screen bg-gray-300/90 overflow-hidden`}
    >
      <div className="relative min-w-[700px] flex flex-col bg-white shadow-xl px-8 py-5 rounded-md space-y-3 ">
        <AiOutlineClose
          onClick={toggleHandler}
          className="absolute top-4 right-4 text-xl hover:text-red-700 cursor-pointer"
        />
        <div className="text-center pb-2">
          <SecondaryHeader title="Create a category" />
        </div>
        <Formik
          initialValues={{
            categoryName: "",
            categoryType: "",
          }}
          validationSchema={Yup.object({
            categoryName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            categoryType: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const newCategory = [
              {
                idx: parseInt(uuid_v4()),
                check_class: values.categoryName,
                del_yn: values.categoryType,
                create_by: "admin",
                create_dt: "2021.03.04",
                update_dt: "2022.02.02",
              },
              ...categoryData,
            ];
            setCategoryData(newCategory);
            setSubmitting(false);
            resetForm();
          }}
        >
          <Form className="flex flex-col space-y-3">
            <FormInputLarge
              name="categoryName"
              placeholder="Enter a category name..."
              type="text"
              label="Category Name"
            />
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="">
              Category Type
            </label>
            <div className="flex items-center space-x-14">
              <div className="flex items-center space-x-2">
                <Field
                  type="radio"
                  name="categoryType"
                  value="large"
                  className="h-4 w-4"
                />
                <label htmlFor="categoryType">Large Category</label>
              </div>
              <div className="flex items-center space-x-2">
                <Field
                  type="radio"
                  name="categoryType"
                  value="middle"
                  className="h-4 w-4"
                />
                <label htmlFor="categoryType">Middle Category</label>
              </div>
            </div>
            <ErrorMessage name="categoryType">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
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

export default CreateCategory;
