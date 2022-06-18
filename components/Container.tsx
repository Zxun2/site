import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
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
      <Navbar mounted={mounted} />
      <main className="container flex flex-col justify-center max-w-5xl mx-auto bg p-8 prose text-dark dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
