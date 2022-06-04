import React from "react";
import NextRouter from "next/router";

type MetaProps = {
  meta: MetaValues;
  asPath: string;
};

interface MetaValues {
  description: string;
  title: string;
  image?: string;
  date?: string;
  type: string;
}

function Meta({ meta, asPath }: MetaProps) {
  return (
    <>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://leezx.com${asPath}`} />
      <link rel="canonical" href={`https://leezx.com${asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Zong xun" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </>
  );
}

export default Meta;
