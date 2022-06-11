import { PageMeta } from "@/types/index";

const titlesAndDescriptions: PageMeta = {
  about: {
    title: "about",
    description: "whoami",
  },
  blog: {
    title: "blog",
    description: "thoughts on programming, tech, music, and my personal life.",
  },
  music: {
    title: "music",
    description:
      "A look into my music, built with Next.js API routes deployed as serverless functions.",
  },
  books: {
    title: "books",
    description: "a list of my favorite books",
  },
  notFound: {
    title: "404",
    description: "page not found",
  },
  home: {
    title: "khang",
    description: "developer, athlete, student",
  },
  snippets: {
    title: "code snippets",
    description:
      "A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.",
  },
  uses: {
    title: "uses",
    description:
      "here's what tech I'm currently using for coding, videos, and music.",
  },
  photos: {
    title: "photos",
    description: "here's some photos of me",
  },
};

export default titlesAndDescriptions;
