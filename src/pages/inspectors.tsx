import Link from "next/link";
import React from "react";
import Head from "next/head";
const Inspectors = () => {
  return (
    <div>
      <Head>
        <title>Inspectors</title>
      </Head>
      <div>
        <h1>Inspecors list</h1>
        <Link href="/">Back to homepage</Link>
      </div>
    </div>
  );
};

export default Inspectors;
