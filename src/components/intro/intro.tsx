import React from "react";
import inspectonImage from "@/assets/inspection.jpg";
import Image from "next/image";
import { OutlineBotton } from "@/utils/utils";
import { HiOutlineShieldCheck } from "react-icons/hi";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="relative left-5 top-10 flex flex-col space-y-32 text-black pt-10">
      {/* Hero */}
      <div className="flex w-full">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-5xl font-semibold text-light_blue max-w-[520px] mb-7 mt-10">
            Are you still using paper based inspection on your targets?
          </h2>
          <h1 className="text-2xl font-bold  max-w-[600px] tracking-wide">
            Use <span className="text-light_blue">Checkie mobile app</span> and
            an{" "}
            <span className="text-light_blue">Inspection manager web app</span>{" "}
            to do your inspection fast, real-time, and without paper.
          </h1>
          <div className="flex items-center space-x-16 mt-10">
            <a
              href="mailto:support@idrgroup.co.kr"
              className="rounded-full block text-2xl font-semibold text-lightest_blue py-1 px-6 cursor-pointer border-2 border-light_blue  text-center w-[280px] hover:bg-light_blue hover:text-white"
            >
              Contact Us
            </a>
            <div className="rounded-full block text-2xl font-semibold text-lightest_blue py-1 px-6 cursor-pointer border-2 border-light_blue  text-center w-[280px] hover:bg-light_blue hover:text-white">
              Download App
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src={inspectonImage}
            alt="inspection"
            width={650}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
      {/* CTO */}
      <div className="flex flex-col items-center space-y-10 bg-green-200/10 py-10">
        <p className="text-2xl font-bold text-black max-w-[900px] text-center">
          <span className="text-light_blue">If you recognize Smart TAG</span>{" "}
          with your smartphone and enter the inspection details, You can check
          the facility inspection status at a glance.
        </p>
        <a
          href="mailto:support@idrgroup.co.kr"
          className="rounded-full block text-xl font-semibold text-white bg-light_blue py-2 px-6 cursor-pointer tracking-wider text-center w-[280px] border-2 border-transparent hover:bg-white hover:text-light_blue hover:border-light_blue hover:border-2 transition-all duration-150 "
        >
          Contact Us
        </a>
      </div>
      {/* Card */}

      {/* Footer */}
      <div className="bg-black w-full h-[400px] text-white flex flex-col items-center py-11 space-y-5 relative -left-10 ">
        <div className="flex items-center space-x-3">
          <HiOutlineShieldCheck className="text-4xl text-green-600" />
          <Link
            href="/"
            className="text-2xl text-gray-400 cursor-pointer font-bold uppercase hover:text-green-600 transition-all duration-150 tracking-wide"
          >
            Checkie
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
          <span className="">
            IDR Envision / TEL 02-6956-4191 | FAX 02-558-8144
          </span>
          <span className="">
            08389 272, Digital-ro, Guro-gu, Seoul, Hanshin IT Tower #n/1201
          </span>
          <span className="">
            Privacy Policy | Personal Information Protection Officer: Oh Se-dong
          </span>
          <span className="">support@idrgroup.co.kr</span>
        </div>
        <p className="text-md">Terms of Use Privacy Policy</p>
        <span className=" text-xs text-gray-400">
          &copy; 2023 SHOPL&COMPANY All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Intro;
