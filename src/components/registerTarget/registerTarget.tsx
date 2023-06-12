import { SecondaryHeader } from "@/utils/utils";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { FormInputLarge, Select } from "../formFiels/formFields";

const RegisterTarget = ({
  close,
  toggleHandler,
}: {
  close: boolean;
  toggleHandler: () => void;
}) => {
  const inspectorInfo = [
    { label: "Inpector 1", value: "One", name: "inspectors" },
    { label: "Inpector 2", value: "Two", name: "inspectors" },
    { label: "Inpector 3", value: "Three", name: "inspectors" },
  ];
  const itemInfo = [
    { label: "Fire Extingusher", value: "One", name: "items" },
    { label: "Pressure machine", value: "Two", name: "items" },
  ];
  return (
    <>
      <div
        className={`absolute left-0  top-0 h-auto w-screen z-50 ${
          !close ? "hidden" : "block"
        } overflow-y-scroll bg-gray-300/90 py-16`}
      >
        <div className="relative left-1/2 -translate-x-1/2 w-[700px] h-auto flex flex-col bg-white shadow-xl px-8 py-5 rounded-md space-y-3">
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
              schedule: "",
              inspectors: [],
              image: "",
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className="flex flex-col space-y-3">
              <FormInputLarge
                name="tagName"
                placeholder="Enter a target name..."
                type="text"
                label="Target Name"
              />
              {/*  */}
              <FormInputLarge
                name="tagId"
                placeholder="Enter a tag ID..."
                type="text"
                label="Tag ID"
              />
              {/*  */}
              <Select
                title="Select an Item"
                placeholder="Select inspection item"
                info={itemInfo}
              />
              {/*  */}
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
              {/*  */}
              <Select
                title="Select an Inspector"
                placeholder="Select inspectors"
                info={inspectorInfo}
              />
              {/*  */}
              <label className="text-lg font-semibold" htmlFor="image">
                Choose image <span className="text-xs">Only one</span>
              </label>
              <Field
                className="rounded-md px-4 py-2 border-2 border-slate-350"
                placeholder="Enter a target name..."
                name="image"
                type="file"
                accept="image/png, image/jpeg"
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
    </>
  );
};

export default RegisterTarget;
