import React from "react";

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
