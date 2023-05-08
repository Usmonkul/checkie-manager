import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "../components/layout";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Checkie - Home</title>
      </Head>
      <h1>Hello</h1>
      <Link href="/inspectors">Inspectors page</Link>
    </div>
  );
}
