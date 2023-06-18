import React from 'react';

type MetaProps = {
  meta: MetaValues;
  asPath: string;
};

export interface MetaValues {
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
      <meta property="og:url" content={`https://lzongxun.dev${asPath}`} />
      <link rel="canonical" href={`https://lzongxun.dev${asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Zong xun" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta property="article:published_time" content={meta.date ?? ''} />
    </>
  );
}

export default Meta;
