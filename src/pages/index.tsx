import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Auth from "./auth";
import { useUserStore } from "@/context/auth.context";
const inter = Inter({ subsets: ["latin"] });
import Intro from "@/components/intro/intro";

export default function Home() {
  const isUserExist = useUserStore((state) => state.isUserExist);
  return (
    <div className=" overflow-hidden">
      <Head>
        <title>Checkie - Home</title>
      </Head>
      {!isUserExist ? <Auth /> : <Intro />}
    </div>
  );
}
