import Head from "next/head";
import { useState, useEffect } from "react";
import Meta from "./metadata/Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import SEO from "./metadata/SEO";

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

  return (
    <div className="bg">
      <SEO title={props.title} meta={meta} asPath={router.asPath} />
      {/* <Navbar mounted={mounted} /> */}
      <Navbar />
      <main className="container flex flex-col justify-center h-screen max-w-4xl mx-auto bg p-4 sm:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
