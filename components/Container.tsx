import Head from "next/head";
import { useState, useEffect } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

type ContainerProps = {
  children: any;
  title?: string;
  description?: string;
  date?: string;
  type?: string;
};

export default function Container(props: ContainerProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: "Zong xun",
    description: "developer, athelete, student",
    type: "website",
    ...customMeta,
  };

  const padding = "md:p-0 sm:p-8 p-6";

  return (
    <div className="bg">
      <Head>
        <title>{meta.title}</title>
        <Meta meta={meta} asPath={router.asPath} />
      </Head>
      {/* <Navbar mounted={mounted} /> */}
      <Navbar />
      <main
        className={`contained flex flex-col justify-center max-w-2xl mx-auto ${padding} bg`}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
