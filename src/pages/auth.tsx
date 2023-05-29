import Head from "next/head";
import React from "react";

const Auth = () => {
  const handleSubmit = () => {
    console.log("sumbitted");
  };
  return (
    <div className="absolute top-0  h-screen w-screen grid items-center justify-center overflow-hidden text-black">
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="w-[450px] bg-primary_white rounded-lg shadow-2xl">
        <div className="bg-light_blue p-3 text-center rounded-t-md">
          <h2 className="uppercase tracking-wide text-2xl text-primary_white font-semibold">
            Sign In
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[80%] flex flex-col items-center mx-auto py-7"
        >
          <div className="w-full mb-5">
            <label
              className="text-lg font-medium block mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              className="w-full bg-gray-300 rounded-md px-3 py-3 outline-light_blue"
              placeholder="Enter your username..."
            />
          </div>
          <div className="w-full">
            <label
              className="text-lg font-medium block mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="text"
              className="w-full bg-gray-300 rounded-md px-3 py-3 outline-light_blue"
              placeholder="Enter your password..."
            />
          </div>
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
        </form>
      </div>
    </div>
  );
};

export default Auth;
