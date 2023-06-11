import Head from "next/head";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserStore } from "@/context/auth.context";
const Auth = ({
  setUser,
}: {
  setUser?: (newUser: { username: string; password: string }) => void;
}) => {
  const { setIsUserExist, user, updatedUser } = useUserStore((state) => ({
    setIsUserExist: state.setIsUserExist,
    user: state.user,
    updatedUser: state.updateUser,
  }));

  if (user.username === "admin007" && user.password === "admin0707") {
    setIsUserExist();
  }
  return (
    <div className="absolute top-0 left-0  h-screen w-screen grid items-center justify-center overflow-hidden text-black bg-gray-500/50 z-50">
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="w-[450px] bg-primary_white rounded-lg shadow-2xl">
        <div className="bg-light_blue p-3 text-center rounded-t-md">
          <h2 className="uppercase tracking-wide text-2xl text-primary_white font-semibold">
            Sign In
          </h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "Must be 15 characters or less")
              .min(4, "There should be at least 4 characters")
              .required("Required"),
            password: Yup.string()
              .max(15, "Must be 15 characters or less")
              .min(4, "There should be at least 4 characters")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const newUser = {
                username: values.username,
                password: values.password,
              };
              updatedUser(newUser);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="w-[80%] flex flex-col items-center mx-auto py-7">
            <FormInput
              label="Username"
              type="text"
              placeholder="Username is admin007"
              name="username"
            />
            <FormInput
              label="Password"
              type="password"
              placeholder="Password is admin0707"
              name="password"
            />
            <div className="text-sm mt-2 ml-auto font-semibold cursor-pointer">
              Forget{" "}
              <span className="text-light_blue underline">
                username / password?
              </span>
            </div>
            <button
              className="w-full bg-light_blue py-3 rounded-md uppercase font-bold text-white tracking-wide mb-5 mt-7 hover:bg-lightest_blue transition-all"
              type="submit"
            >
              Sing In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Auth;

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div className="w-full mb-5">
      <label className="text-lg font-medium block mb-2" htmlFor={name}>
        {label}
      </label>
      <Field
        name={name}
        type={type}
        className="w-full bg-gray-300 rounded-md px-3 py-3 outline-light_blue"
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
