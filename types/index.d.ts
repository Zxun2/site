import React from 'react';

export type LinkProps = {
  href: string;
  className?: string;
  children: JSX.Element | string;
};

export type PageMeta = {
  [key: string]: {
    title: string;
    description: string;
  };
};

export type BlogProps = {
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
  tags: Array<string>;
};

export type FrontMatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
} & BlogProps;

export type MdxSource = MDXRemoteSerializeResult<Record<string, unknown>>;

export type PostProps = {
  mdxSource: MdxSource;
  frontMatter: FrontMatter;
};
