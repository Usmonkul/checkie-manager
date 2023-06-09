import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className="bg-[#F7F9FD]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
