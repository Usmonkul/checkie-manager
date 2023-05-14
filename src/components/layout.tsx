import * as React from "react";
import { Header, SideNavigation } from "@/components/index";
import Head from "next/head";
export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Checkie web manager app" />
      </Head>
      <Header />
      <SideNavigation />
      <main className="flex-1 mt-[80px] md:ml-[100px]">{children}</main>
    </div>
  );
};
