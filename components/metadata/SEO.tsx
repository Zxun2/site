import React from "react";
import Meta, { MetaValues } from "./Meta";
import Head from "next/head";

type SEOProps = {
  title?: string;
  meta: MetaValues;
  asPath: string;
};

function SEO({ title, meta, asPath }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <Meta meta={meta} asPath={asPath} />
    </Head>
  );
}

export default SEO;
