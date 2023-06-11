import Head from "next/head";
import Auth from "./auth";
import { useUserStore } from "@/context/auth.context";
import Intro from "@/components/intro/intro";

export default function Home() {
  const isUserExist = useUserStore((state) => state.isUserExist);
  return (
    <>
      <div className=" overflow-hidden">
        <Head>
          <title>Checkie - Home</title>
        </Head>
        {!isUserExist ? <Auth /> : <Intro />}
      </div>
    </>
  );
}
