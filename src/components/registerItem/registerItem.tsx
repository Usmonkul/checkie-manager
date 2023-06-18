import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import ContentCom from "../contentCom/contentCom";
import { FormInputLarge } from "../formFiels/formFields";
import { ItemProps } from "../../../types/types";
const RegisterItem = ({
  close,
  toggleHandler,
  setItemData,
  itemData,
}: {
  itemData: ItemProps[];
  close: boolean;
  toggleHandler: () => void;
  setItemData: (newItem: ItemProps[]) => void;
}) => {
  return (
    <div
      className={`fixed left-0  top-0 h-screen w-screen z-50 ${
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
            const randomId = Math.floor(Math.random() * 1000);
            const newItem = [
              {
                idx: randomId,
                check_class: {
                  idx: "1",
                  check_class: values.largeCategory,
                  del_yn: "N",
                  create_by: "admin",
                  create_dt: "2019.03.12",
                  update_dt: "2022.03.10",
                },
                checkSubClass: {
                  idx: "1",
                  check_class: values.middleCategory,
                  del_yn: "N",
                  create_by: "admin",
                  create_dt: "2020.03.12",
                  update_dt: "2022.03.10",
                },
                check_item: values.itemName,
                check_content: values.content,
                del_yn: "N",
                create_by: "admin",
                create_dt: "2021.03.04",
                update_dt: "2022.02.02",
              },
              ...itemData,
            ];
            console.log(newItem);
            // const JSONdata = JSON.stringify(data);
            // alert(JSONdata);
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
            setItemData(newItem);
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
            <label className="text-lg font-semibold" htmlFor="largeCategory">
              Select Large Category
            </label>
            <Field
              name="largeCategory"
              as="select"
              className="rounded-md px-4 py-2 border-2 border-slate-350"
            >
              <option disabled value="">
                Options
              </option>
              <option value="Lab">Lab</option>
              <option value="W19">W19</option>
              <option value="Finance Building">Finance Building</option>
            </Field>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="middleCategory">
              Select Middle Category
            </label>
            <Field
              name="middleCategory"
              as="select"
              className="rounded-md px-4 py-2 border-2 border-slate-350"
            >
              <option disabled value="">
                Options
              </option>
              <option value="basic">basic</option>
              <option value="Toilet">Toilet</option>
              <option value="102 room">102 room</option>
            </Field>
            {/*  */}
            <label className="text-lg font-semibold" htmlFor="">
              Content
            </label>
            <ContentCom name="content" inputType="textarea" />

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
